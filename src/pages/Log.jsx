import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getExistingUsersApi,userLoginApi,userRegisterApi } from '../services/allApis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Log() {

  const [authStatus,setAuthStatus]= useState(false)

  const [user,setUser]=useState({
    email:"",username:"",password:""
  })

  const nav=useNavigate()

  const handleRegister=async()=>{
    const{email,username,password}=user;
    console.log(user)
    if(!email || !username || !password){
      toast.warning("Enter Valid Inputs")
    }
    else{
      const result=await getExistingUsersApi(email)
      console.log(result)
      if(result.data.length>0){
        toast.info("User Email Already Exists!!")
      }
      else{
        const result= await userRegisterApi(user)
        if(result.status==201){
          toast.success("User Registration successfull")
          setUser({
            email:"",username:"",password:""
          })
          changeStatus()
        }
        else{
          toast.error("Registration Failed")
          console.log(result)
          setUser({
            email:"",username:"",password:""
          })

        }
        
      }

    }
  }

  const handleLogin=async()=>{
    const{email,password}=user
    
    if(!email  || !password){
      toast.warning("Enter Valid Inputs")
    }else{
      const result=await userLoginApi(email,password)
      if(result.status==200){
        if(result.data.length>0){
          toast.success("Login Success!!")
          nav('/dash')
        }
        else{
          toast.error("Login Failed! Invalid Email or Password")
        }
      }
      else{
          toast.warning("Somthing Went Wrong")
      }
    }
  }


  const changeStatus=()=>{
    setAuthStatus(!authStatus)
  }


  return (
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
      <div className="w-50 border shadow bg-light border-3 border-dark p-3">
        <Row>
          <Col>
          <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg" alt="auth" className='w-100 h-100' />
          </Col>
          <Col>
          {
            authStatus ?
            
            <h3>Register</h3>
            :
            <h3>Login</h3>
          }
          
          <div className="my-4">
          <FloatingLabel controlId="floatingInput"label="Email address" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              {
                authStatus &&
                <FloatingLabel controlId="floatingInput" label="Username" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} className='mb-3'>
                    <Form.Control type="password" placeholder="name" />
                </FloatingLabel>
              }
              <FloatingLabel controlId="floatingPassword" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} label="Password">
           <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
          </div>
          <div className='d-flex justify-content-between'>
          
          {
              authStatus ?
              <button className="btn btn-success" onClick={handleRegister}>Register</button>
              :
              <button className="btn btn-info" onClick={handleLogin}>Login</button>
          }
          {
                authStatus?
                <button className="btn btn-link" onClick={changeStatus} >Already a User?</button>
                :
                <button className="btn btn-link" onClick={changeStatus} >New User?</button>
          }
      
          </div>
          </Col>
        </Row>
      </div>
    </div>
    </>
  )
}

export default Log