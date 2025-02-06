import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <div className='container-fluid'>
      <Row style={{height:'65vh'}}>
        <Col className='d-flex justify-content-center flex-column p-3'>
        <h1>MediaPlayer 2025</h1>
        <p style={{textAlign:'justify'}}> A spot for youtube video management and video streaming.
        A responsive navigation header, including support for branding, navigation, and more.
         Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.
         A responsive navigation header, including support for branding, navigation, and more.
         Here’s an example of all the sub-components included in a responsive light-themed navba
        </p>
        <Link className="btn btn-success" to={"/log"}>Click To Start..</Link>
         </Col>
         <Col className='d-flex justify-content-center p-2 mt-4'>
         <img src="https://www.eazysmm.com/wp-content/uploads/2022/01/youtube-g1fbe80f8d_1280.png" alt="banner" className='img-fluid' />
         </Col>
      </Row>
      <div className='container p-3'>
        <h4 className='my-3'>Features</h4>
        <div className='d-flex justify-content-between'>


        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" />
      <Card.Body>
        <Card.Title>Upload Youtube Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/43/3d/83/433d83f7e481f35245f8c6bb7c7591d8.gif" />
      <Card.Body>
        <Card.Title>Easy Video Management</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://media3.giphy.com/media/2ikwIgNrmPZICNmRyX/200w.gif?cid=6c09b9524lus8kn617u5ott6z13knf09qfxonu401ayh93u1&ep=v1_gifs_search&rid=200w.gif&ct=g" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>

      </div>

      <div className="container-fluid p-3 bg-secondary text-light my-3">
        <Row>
          <Col className='d-flex flex-column justify-content-center'>
          <h3>Simple Easy And Secure</h3>
          <p style={{textAlign:'justify'}}>A spot for youtube video management and video streaming.
        A responsive navigation header, including support for branding, navigation, and more.
         Heres an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.
         A responsive navigation header, including support for branding, navigation, and more.
         Heres an example of all the sub-components included in a responsive light-themed navba</p>
          </Col>
          <Col>
          <img src="https://img.freepik.com/premium-vector/cyber-security-risk-management-flat-modern-design-illustration_566886-401.jpg" alt="simple" className='w-100' height={"300px"} />
          </Col>
        </Row>

      </div>

      <div className="container-fluid p-2 border my-2">
        <Row>
          <Col lg={4} className='d-flex flex-column justify-content-center'>
          <h2>Checkout our New Updates</h2>
          <p style={{textAlign:'justify'}}>A spot for youtube video management and video streaming.
        A responsive navigation header, including support for branding, navigation, and more.
         Heres an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.
         A responsive navigation header</p>
         </Col>
          <Col lg={8}>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/tsu01TR7Ofk?si=4KqG3qdYBpqR1a5l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>

    </div>
    
    </>
  )
}

export default Landing