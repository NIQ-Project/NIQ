import React from 'react'
import BigLogoM from '../pictures/BigLogoM.png'
import { Row, Col, Card } from 'react-bootstrap'
import quiahn from '../pictures/quiahn.jpg'
import nick from '../pictures/nick.png'
import ivan from '../pictures/ivan.png'
import GitHub from '../pictures/gitHub'
import LinkedIn from '../pictures/linkedIn'

export default function Home () {
  return (
    <div className='text-center' >
      <div style={{ height: '100vh' }} >
        <img id='big-m' src={BigLogoM} className='bob-down img-fluid' />
        {/* <p>The Monthly Service Tracker.</p> */}
        <p className='animated animatedFadeInUp fadeInUp' style={{ marginTop: '12vh', color: 'lightgray' }} >The App That Helps You Track Your Monthly Goals And Tasks.</p>
      </div>

      {/* DESKTOP */}
      <div className='d-none d-lg-block' style={{ height: '100vh' }} >
        <Row className='d-flex align-items-center h-100' >
          <Col xs={6} className='text-center'>
            <p className='grad text-white border border-light border-1 m-0 rounded px-2' style={{ fontSize: '54px', paddingTop: '15%', paddingBottom: '15%', width: '75%', transform: 'skew(-0.00turn, -5deg)', textShadow: '-1px -1px 0 #222222, 1px -1px 0 #222222, -1px 1px 0 #222222, 1px 4px 0 #222222' }} >Create Your Monthly Tasks</p>
          </Col>
          <Col>
            <p style={{ color: 'lightgray', fontSize: '24px' }} >Get started using monthly! First, create an account to help you keep track of your monthly goals and lists. Next, select “View Lists” and from there you will be able to view, create, or edit your list for the desired month. Additionally, on this screen you will be able to add tasks or goals to any of the lists created. Help yourself get back on track and have fun doing it with Monthly!</p>
          </Col>
        </Row>
      </div>

      <div style={{ height: '100vh' }}>
        <h1 className='text-white pt-5'>The Team</h1>

        <Row className='d-flex align-items-center justify-content-center' style={{ height: '75%' }}>
          <Col md={4}>
            <Card>
              <div className='img2'> <img src={quiahn} alt='Quiahn Ballou' /> </div>
              <div className='main-text'>
                <h2>Quiahn Ballou</h2>
                <p>Cohoes, NY</p>
                <p>Fullstack Web Developer</p>
                <hr />
              </div>
              <div className='socials'>
                <a className="icon-hover mx-2" href="https://www.linkedin.com/in/quiahn-ballou/"><LinkedIn></LinkedIn></a>
                <a className="icon-hover mx-2" href="https://github.com/Quiahn"><GitHub></GitHub></a>
              </div>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <div className='img2'> <img src={nick} alt='Nick Wilkerson' /> </div>
              <div className='main-text'>
                <h2>Nick Wilkerson</h2>
                <p>Golden, Colorado</p>
                <p>Fullstack Web Developer</p>
                <hr />
              </div>
              <div className='socials'>
                <a className="icon-hover mx-2" href="https://www.linkedin.com/in/nickwilkerson/"><LinkedIn></LinkedIn></a>
                <a className="icon-hover mx-2" href="https://github.com/nickwilkerson"><GitHub></GitHub></a>
              </div>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <div className='img2'> <img src={ivan} alt='Ivan Ly' /> </div>
              <div className='main-text'>
                <h2>Ivan Ly</h2>
                <p>College Station, Texas</p>
                <p>Fullstack Web Developer</p>
                <hr />
              </div>
              <div className='socials'>
                <a className="icon-hover mx-2" href="https://www.linkedin.com/in/ivan-ly/"><LinkedIn></LinkedIn></a>
                <a className="icon-hover mx-2" href="https://github.com/Ivanly25"><GitHub></GitHub></a>
              </div>
            </Card>
          </Col>
        </Row>

      </div>
    </div>
  )
}
