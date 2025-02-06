import React, { useEffect, useState } from 'react'
import AddCategory from './AddCategory'
import { getCategoryListApi } from '../services/allApis'
import { deleteCategoryApi,addVideoToCategoryApi } from '../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'


function CatogoryList() {
  const [list,setList]=useState([])
  const [addCategory,setAddCategory]=useState("")

  useEffect(()=>{
    getData()
  },[addCategory])

  const dragOverHandler=(e)=>{
    e.preventDefault()
    console.log("draging over")
  }

  const dropEventHandler=async(e,cat)=>{
    console.log("dropped")
    // console.log(e.dataTransfer.getData('video'))
    // console.log(cat)
    const video=JSON.parse(e.dataTransfer.getData('video'))
    cat.videos.push(video)
    // console.log(cat)
    const result=await addVideoToCategoryApi(cat.id,cat)
    console.log(result)
    if(result.status==200){
      toast.success("Video Added To Category")
      getData()
    }else{
      toast.warning("Adding Failed!! Something went wrong")
    }
  }

  const getData=async()=>{
    const result=await getCategoryListApi()
    console.log(result)
    if(result.status==200){
      setList(result.data)
    }
  }

  
   
    const removeCategory = async(id)=>{
      const result=await deleteCategoryApi(id)
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
    <div className="w-100" >
        <h3 className="mb-3">Category List</h3>
            <AddCategory addCat={setAddCategory}/>
        <div className="d-flex flex-column mt-4 p-2 border border-2 border-dark">
          {
            list.length>0 ?
            <>
            {
              list?.map(item=>(
                  
                <div className="w-100 border m-2 shadow p-3 rounded " 
                onDragOver={(e)=>dragOverHandler(e)} onDrop={(e)=>dropEventHandler(e,item)}>
                  <div className='d-flex justify-content-between'>
                <h4>{item.name}</h4>
                <button className="btn" onClick={()=>{removeCategory(item.id)}}>
                <i class="fa-solid fa-trash text-danger fa-xl"></i>
                </button>
                </div>
                {
                  item.videos.length>0 &&
                  item.videos.map(vid=>(
                    <VideoCard video={vid} cat={true}/>
                  ))
                }
                </div>
              ))
            } 
            </>
            :
            <div>
              <h2 className="w-100 border m-2 rounded border-danger text-danger">No Categories Added Yet!!</h2>
            </div>
          }
            
        </div>
    </div>
    </>
  )
}

export default CatogoryList