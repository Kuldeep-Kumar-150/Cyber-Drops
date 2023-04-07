import React from 'react'
import { Container } from 'react-bootstrap'
import image1 from '../assets/image/svg/sticker_1.svg'
import image2 from '../assets/image/svg/sticker_2.svg'

const RoadMap2 = () => {
    return (
        <section className='timeline_bgimage d-none'>
            <Container>
                <h5 className='fs_48 fw-bold text-white text-center mb-5 mt-5'>Road <span className='clr_khakhi'>Map</span></h5>
                <div className="timeline_line position-relative">
                    <div className='image_1 position-absolute d-flex align-items-center'>
                        <img src={image1} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3'>
                            <p className='text-white mb-1'>March 2022</p>
                            <p className='text-white mb-0 mt-1'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className="image_2 position-absolute d-flex align-items-center">
                        <div className='d-flex flex-column timeline_content_box me-3 me-lg-5'>
                            <p className='text-white text-end mb-1'>March 2022</p>
                            <p className='text-white text-end mb-0 mt-1'>1000 Drops Launch on Ethereum</p>
                        </div>
                        <img src={image2} alt="image1" />
                    </div>
                    <div className='image_3 position-absolute d-flex align-items-center'>
                        <img src={image1} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3'>
                            <p className='text-white mb-1'>March 2022</p>
                            <p className='text-white mb-0 mt-1'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className="image_4 position-absolute d-flex align-items-center">
                        <div className='d-flex flex-column timeline_content_box me-3 me-lg-5'>
                            <p className='text-white text-end mb-1'>March 2022</p>
                            <p className='text-white text-end mb-0 mt-1'>1000 Drops Launch on Ethereum</p>
                        </div>
                        <img src={image2} alt="image1" />
                    </div>
                    <div className='image_5 position-absolute d-flex align-items-center'>
                        <img src={image1} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3'>
                            <p className='text-white mb-1'>March 2022</p>
                            <p className='text-white mb-0 mt-1'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className="image_6 position-absolute d-flex align-items-center">
                        <div className='d-flex flex-column timeline_content_box me-3 me-lg-5'>
                            <p className='text-white text-end mb-1'>March 2022</p>
                            <p className='text-white text-end mb-0 mt-1'>1000 Drops Launch on Ethereum</p>
                        </div>
                        <img src={image2} alt="image1" />
                    </div>
                    <div className='image_7 position-absolute d-flex align-items-center'>
                        <img src={image1} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3'>
                            <p className='text-white mb-1'>March 2022</p>
                            <p className='text-white mb-0 mt-1'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className="image_8 position-absolute d-flex align-items-center">
                        <div className='d-flex flex-column timeline_content_box me-3 me-lg-5'>
                            <p className='text-white text-end mb-1'>March 2022</p>
                            <p className='text-white text-end mb-0 mt-1'>1000 Drops Launch on Ethereum</p>
                        </div>
                        <img src={image2} alt="image1" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default RoadMap2