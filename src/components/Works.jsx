import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Works = () => {
    return (
        <section className='my-xl-5 position-relative overflow-hidden'>
            <Container>
                <h6 className='fs_48 fw-bold text-white text-center py-3 py-lg-5'>How it <span className='clr_khakhi'>works</span></h6>
                <Row className='justify-content-center'>
                    <Col sm={6} lg={4} xl={3} data-aos="zoom-out">
                        <div className="cards_hover h-100 linear_border d-flex flex-column text-center align-items-center justify-content-center rounded-4">
                            <div className="cards_circle d-flex align-items-center justify-content-center"><h4 className='fs_xl fw-bold text-white'>01</h4></div>
                            <p className='fs_md fw-bold text-white mb-0 mt-3'>Mint NFT</p>
                            <p className='text-white fs_xsm fw-normal mt-2 mb-0'>You must own our NFT to connect to direct management or participate in governance
                            </p>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='mt-4 mt-sm-0' data-aos="zoom-in-right">
                        <div className="cards_hover h-100 linear_border d-flex flex-column text-center align-items-center justify-content-center rounded-4">
                            <div className="mt-4 mt-sm-4 cards_circle d-flex align-items-center justify-content-center"><h4 className='fs_xl fw-bold text-white'>02</h4></div>
                            <p className='fs_md fw-bold text-white mb-0 mt-3'>Verify NFT Ownership</p>
                            <p className='text-white fs_xsm fw-normal mt-2'>Only Cyber Drops that are have verified are eligible to be connected under direct management
                            </p>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='mt-4 mt-lg-0' data-aos="zoom-out">
                        <div className="cards_hover h-100 linear_border d-flex flex-column text-center align-items-center justify-content-center rounded-4">
                            <div className="cards_circle d-flex align-items-center justify-content-center"><h4 className='fs_xl fw-bold text-white'>03</h4></div>
                            <p className='fs_md fw-bold text-white mb-0 mt-3'>Link API to your account</p>
                            <p className='text-white fs_xsm fw-normal mt-2'>Only HODLers that submit their API key and secret will be under direct management
                            </p>
                        </div>
                    </Col>
                    <Col sm={6} lg={4} xl={3} className='mt-4 mt-xl-0' data-aos="zoom-in-right">
                        <div className="cards_hover h-100 linear_border d-flex flex-column text-center align-items-center justify-content-center rounded-4">
                            <div className="mt-sm-4 mt-xl-3 cards_circle d-flex align-items-center justify-content-center mt-sm-1"><h4 className='fs_xl fw-bold text-white'>04</h4></div>
                            <p className='fs_md fw-bold text-white mb-0 mt-3'>Passive Income for life</p>
                            <p className='text-white fs_xsm fw-normal mt-2'>As long as your HODL your Cyber Drop, you will be connected under direct management</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Works