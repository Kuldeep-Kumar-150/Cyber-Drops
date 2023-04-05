import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import balooImage from '../assets/image/png/baloon_image.png'

const MyHeader = () => {
    return (
        <section className='py-5 d-flex flex-column align-items-center overflow-hidden justify-content-center flex-grow-1'>
            <Container>
                <Row className='align-items-center flex-column-reverse flex-md-row'>
                    <Col md={7} className='text-center text-md-start' data-aos="fade-right">
                        <h1 className='fw-bolder fs_72 text-white mt-3 heading_width'>Welcome to <span className='clr_khakhi heading_width'>Cyber Drops</span></h1>
                        <p className='text-white fw-normal fs_sm mt-3 paragraph_width'>Viverra felis, dui adipiscing ipsum pharetra donec. Pretium, tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec curabitur purus. Ullamcorper mattis risus suspendisse pretium tristique.</p>
                        <a className='explore_btn mt-2 mt-xl-5 d-inline-block' href="#">Explore Now</a>
                    </Col>
                    <Col md={5} className='d-flex justify-content-center justify-content-lg-start' data-aos="fade-left">
                        <img className='baloon_image' src={balooImage} alt="balooImage" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MyHeader