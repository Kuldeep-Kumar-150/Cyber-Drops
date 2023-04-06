import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import capImage from '../assets/image/svg/cap_img.svg'
import polygen_1 from '../assets/image/png/polygen_1.png'
import polygen_2 from '../assets/image/png/polygen_2.png'
import polygen_3 from '../assets/image/png/polygen_3.png'

const WhatDo = () => {
    return (
        <section className='py-5 my-3 position-relative overflow-hidden'>
            <div className="bg_blur_elipse2"></div>
            <div className="bg_blur_box3"></div>
            <div className='cap_img position-absolute d-none d-xxl-flex'><img src={capImage} alt="capImage" /></div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={5} data-aos="zoom-in-down">
                        <Row>
                            <div className='d-flex p-0'>
                                <Col sm={6} className='p-0'><img className='w-100' src={polygen_1} alt="polygen_1" /></Col>
                                <Col sm={6} className='p-0'><img className='w-100' src={polygen_2} alt="polygen_2" /></Col>
                            </div>
                            <div className='d-flex polygen_translate'>
                                <Col sm={6} className='p-0'><img className='w-100' src={polygen_3} alt="polygen_2" /></Col>
                                <Col sm={6} className='p-0'><img className='w-100' src={polygen_3} alt="polygen_2" /></Col>
                            </div>
                        </Row>
                    </Col>
                    <Col md={6} className='ms-md-4 ps-md-4 ms-lg-5 ps-lg-5 pt-4 pt-md-0' data-aos="zoom-in-left">
                        <h4 className='fs_48 fw-bold text-white ps-md-4 ms-lg-5 ps-lg-3'>What <span className='clr_khakhi'>we do</span></h4>
                        <p className='fs_sm fw-normal text-white pt-2 mb-0 ps-md-4 ms-lg-5 ps-lg-3'>1000 Cyber Drops will be dropping on Ethereum in March 2022. Each and every Cyber Drop is uniquely hand crafted. This is just the beginning of our journey. Owning a Cyber Drop will unlock monthly airdrops and future governance rights in addition to our revolutionary algorithm. We strive to always bring innovation and keep BUILDing. Cyber Drops is a community driven project and always will be that way. That’s our promise.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhatDo