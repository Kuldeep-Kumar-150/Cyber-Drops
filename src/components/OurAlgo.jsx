import React from 'react'
import card_1 from '../assets/image/png/card_1.png'
import card_2 from '../assets/image/png/card_2.png'
import card_3 from '../assets/image/png/card_3.png'
import { Col, Container, Row } from 'react-bootstrap'

const OurAlgo = () => {
    return (
        <section className='position-relative'>
            <div className="bg_blur_elipse"></div>
            <Container>
                <p className='fs_sm fw-bold clr_khakhi text-center mt-5 pt-5 pt-xl-0 mt-xl-0'>For business and collaborations, <a className='clr_khakhi' href="mailto:team@cyberdrops.finance">contact us team@cyberdrops.finance</a></p>
                <Row className='py-5 align-items-center flex-column-reverse flex-md-row'>
                    <Col md={6} data-aos="zoom-in">
                        <h4 className='fs_48 fw-bold text-white mt-4'>Our <span className='clr_khakhi'>Algo</span></h4>
                        <p className='fs_sm fw-normal text-white pt-2 mb-0'>We have perfected our algorithm, which prioritizes a low risk and consistent profit stream without the need for daily micromanagement. While most trading algorithms can’t stand up against a volatile or risky market, our algorithm thrives in those conditions. Early-stage testers have seen a consistent flow of income with minimal ups and downs. Our algorithm has been in the works for YEARS. This has given us the time to rigorously backtest and release any needed hotfixes. As of early March 2022, we have close to a quarter of a million under direct management!</p>
                    </Col>
                    <Col md={6} data-aos="zoom-in-up">
                        <div className="d-flex align-items-center ps-lg-5 mt-lg-5">
                            <div className="d-flex flex-column">
                                <img className='w-100 linear_border' src={card_1} alt="card_1" />
                                <img className='w-100 mt-2 mt-xl-4 linear_border' src={card_2} alt="card_2" />
                            </div>
                            <div><img className='w-100 ms-2 ms-xl-4 linear_border' src={card_3} alt="card_3" /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurAlgo