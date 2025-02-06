import React, { useState,useEffect } from 'react'
import { getHistoryApi } from '../services/allApis'
import { deleteHistoryApi } from '../services/allApis'
import { toast } from 'react-toastify'


function History() {

  const [history,setHistory]=useState([])
  useEffect(()=>{
      getData()
    },[])

  const getData=async()=>{
    const result= await getHistoryApi()
    if(result.status==200){
      setHistory(result.data)
    }
    else{
      console.log(result)
    }
  }


  
      const removeHistory = async(id)=>{
        const result=await deleteHistoryApi(id)
        console.log(result)
        if(result.status==200){
          getData()
         
          
        }
        else{
          toast.warning("Deletion failed")
        }
      }

  return (
    <>
    <div className="container-fluid">
      <h2>Watch History</h2>
      {
        history.length>0 ?
        
      <table className="table table-bordered my-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
          <th>Date & Time</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {history?.map(item => (
          <tr>
          <td>{item.videoId}</td>
          <td>{item.title}</td>
          <td>
            <img src={item.image} height={'200px'} alt="" />
          </td>
          <td>{item.datetime}</td>
          <td>
            <button className="btn" onClick={()=>{removeHistory(item.id)}}><i class="fa-solid fa-trash text-danger fa-xl"></i></button>
          </td>
        </tr>
        ))}
        
      </tbody>
    </table>
    :
    <h2 className='text-center text-danger'>No History Available</h2>
      }
    </div>
    </>
  )
}

export default History