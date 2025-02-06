import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    
    <Navbar className="bg-danger ">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <i class="fa-solid fa-cloud-arrow-up fa-xl text-warning"></i>
            {''}
            MediaPlayer
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header