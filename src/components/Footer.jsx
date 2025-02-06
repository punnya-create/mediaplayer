import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className='container-fluid bg-danger p-3 text-light'>
    <Row>
        <Col lg={5}>
        <h2>MediaPlayer 2025</h2>
        <p>A responsive navigation header, including support for branding, navigation, and more. Here’s an example of all the sub-components included in a responsive
        light-themed navbar that automatically collapses at the lg (large) breakpoint light-themed navbar that automatically collapses at the lg (large) breakpoint.</p>
        </Col>
        <Col lg={2}>
        <h2>Links</h2>
        <p><Link className='text-light' to={'/'}>Landing</Link></p>
        <p><Link className='text-light' to={'/log'}>Login</Link></p>
        <p><Link className='text-light' to={'/reg'}>Registration</Link></p>
        </Col>
        <Col lg={5}>
        <h2>Feedbacks</h2>
        <textarea name="" placeholder='Enter Feedbacks' className="form-control"></textarea>
        <button className="btn btn-bordered bg-success text-light mt-3">Send</button>
        </Col>
    </Row>
        <h6 className='text-center'>MediaPlayer 2025 &copy; copyright reserved</h6>

   </div>
   </>
  )
}

export default Footer