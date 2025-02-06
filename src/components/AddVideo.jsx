import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addVideoApi } from '../services/allApis';


function AddVideo({addres}) {
    const [show, setShow] = useState(false);


    const [video,setVideo]= useState({
      title:"",videoUrl:"",imageUrl:""
    })

    const handleAdd=async()=>{
      const{title,videoUrl,imageUrl}=video
      if(!title || !videoUrl || !imageUrl){
        toast.warning("Enter Valid Input!!")
      }
      else{
        const charset=video.videoUrl.split("v=")
        setVideo({...video,videoUrl:`https://www.youtube.com/embed/${charset[1]}?si=y3xxNEyC9v-w0fke`}) 
        console.log(video)
        const result=await addVideoApi({title,imageUrl,videoUrl:`https://www.youtube.com/embed/${charset[1]}?si=y3xxNEyC9v-w0fke`})                                //https://www.youtube.com/embed/EdsxhVLDLb4?si=y3xxNEyC9v-w0fke
        console.log(result)
        if(result.status==201){
          toast.success("Video Uploaded successfully")
          setVideo({title:"",videoUrl:"",imageUrl:""})
          handleClose()
          addres(result)
        }
        else{
          toast.error("Uploaded Failed")
          console.log(result)
        }
      }
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);   

  return (
    <>
    
    <button className="btn" onClick={handleShow}>
    <i class="fa-solid fa-circle-plus fa-xl text-succuss"></i>
    </button>

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="my-5">
            <div className='mb-3'>
                <input type='text' onChange={(e) => { setVideo({ ...video, title: e.target.value }) }} placeholder='Enter Video Title' className='form-control'/>
            </div>
            <div className='mb-3'>
                <input type='text' onChange={(e) => { setVideo({ ...video, videoUrl: e.target.value }) }} placeholder='Enter Video URL' className='form-control'/>
            </div>
            <div className='mb-3'>
                <input type='text' onChange={(e) => { setVideo({ ...video, imageUrl: e.target.value }) }} placeholder='Enter Image URL' className='form-control'/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd} >Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddVideo