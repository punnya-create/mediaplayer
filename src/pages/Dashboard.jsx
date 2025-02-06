import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import AddVideo from '../components/Addvideo'
import VideoCard from '../components/VideoCard'
import CatogoryList from '../components/CatogoryList'
import { Link } from 'react-router-dom'
import { getVideoListApi } from '../services/allApis'


function Dashboard() {

  const [videos,setVideos]=useState([])
  const [ addResponse, setAddResponse]=useState("")
  const [delResponce,setDelResponce]=useState("")
  



  useEffect(()=>{
    getData()
  },[addResponse,delResponce])
  const getData=async()=>{
    const result=await getVideoListApi()
    if(result.status==200){
      console.log(result.data)
      setVideos(result.data)
    }
  }
  return (
    <>
    <div className="container-fluid my-5">
      <div className="d-flex justify-content-between">
      <h2>All Videos</h2>
      <Link  to={'/his'}>Watch History</Link>
      <Link className='btn btn-danger' to={'/log'}>Logout</Link>

      </div>
      
      <Row>

        <Col lg={1}>
        
        <AddVideo addres={setAddResponse}/>
        
        </Col>
        <Col lg={8}>
          
        {
        videos.length > 0 ?
        <div className='d-flex justify-content-even flex-wrap border border-3 p-2'>
          {
        videos.map(item=>(
          <VideoCard video={item} del={setDelResponce}/>
        ))
          }
        </div>
        :
        <h3>No Videos Added Yet!!</h3>
        }


        </Col>
        <Col lg={3}>
        <CatogoryList />
        
        </Col>

      </Row>
    </div>
    </>
  )
}

export default Dashboard