import React from 'react'
import cards from '../assets/image/png/cards.png'
import { Container, Row, Col } from 'react-bootstrap'

const OurMission = () => {
    return (
        <section className='py-5 position-relative'>
            <div className="bg_blur_box1 position-absolute"></div>
            <div className="bg_blur_box2 position-absolute"></div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} xl={6} className='d-flex justify-content-center justify-content-md-start'>
                        <img className='card_img' src={cards} alt="balooImage" />
                    </Col>
                    <Col md={6} xl={6} className='text-center text-md-start'>
                        <h1 className='fw-bolder fs_72 text-white mt-3'>Our <span className='clr_khakhi'>Mission</span></h1>
                        <p className='text-white fw-normal fs_sm mt-3'>We understand that one of the biggest concerns for early-stage investors is that it can quickly become stressful, overwhelming, and especially extremely time consuming. It isn’t easy to balance a full time job, family, and an active investment portfolio, especially when just starting out.</p>
                        <a className='explore_btn mt-2 mt-xl-5 d-inline-block' href="#">Read More</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurMission