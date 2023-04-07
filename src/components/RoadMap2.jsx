import React from 'react'
import { Container } from 'react-bootstrap'
import image1 from '../assets/image/svg/sticker_1.svg'
import image2 from '../assets/image/svg/sticker_2.svg'
import sticker1 from '../assets/image/svg/elipse_1.svg'
import sticker2 from '../assets/image/svg/elipse_2.svg'
import sticker3 from '../assets/image/svg/elipse_3.svg'
import sticker4 from '../assets/image/svg/elipse_4.svg'
import sticker5 from '../assets/image/svg/elipse_5.svg'
import sticker6 from '../assets/image/svg/elipse_6.svg'
import sticker7 from '../assets/image/svg/elipse_7.svg'
import sticker8 from '../assets/image/svg/elipse_8.svg'
import capImage4 from '../assets/image/svg/cap_img.svg'
import capImage5 from '../assets/image/svg/cap_img_3.svg'

const RoadMap2 = () => {
    return (
        <section className='timeline_bgimage position-relative'>
            <div className='capImage4 position-absolute'><img src={capImage4} alt="capImage3" /></div>
            <div className='capImage5 position-absolute'><img src={capImage5} alt="capImage3" /></div>
            <Container className='d-none d-md-block'>
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
            <Container className='d-md-none'>
                <h5 className='fs_48 fw-bold text-white text-center mb-5 mt-5'>Road <span className='clr_khakhi'>Map</span></h5>
                <div className="timeline_line position-relative">
                    <div className='image_1 position-absolute d-flex align-items-center'>
                        <img src={sticker1} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3 text-nowrap'>
                            <p className='text-white mb-1 fs_lg fw-semibold'>March 2022</p>
                            <p className='text-white mb-0 mt-1 fs_xsm fw-normal'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className='image_2 position-absolute d-flex align-items-center'>
                        <img src={sticker2} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3 text-nowrap'>
                            <p className='text-white mb- fs_lg fw-semibold'>March 2022</p>
                            <p className='text-white mb-0 mt- fs_xsm fw-normal1'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className='image_3 position-absolute d-flex align-items-center'>
                        <img src={sticker3} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3 text-nowrap'>
                            <p className='text-white mb-1 fs_lg fw-semibold'>March 2022</p>
                            <p className='text-white mb-0 mt-1 fs_xsm fw-normal'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className='image_4 position-absolute d-flex align-items-center'>
                        <img src={sticker4} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3 text-nowrap'>
                            <p className='text-white mb-1 fs_lg fw-semibold'>March 2022</p>
                            <p className='text-white mb-0 mt-1 fs_xsm fw-normal'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className='image_5 position-absolute d-flex align-items-center'>
                        <img src={sticker5} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3 text-nowrap'>
                            <p className='text-white mb-1 fs_lg fw-semibold'>March 2022</p>
                            <p className='text-white mb-0 mt-1 fs_xsm fw-normal'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className='image_6 position-absolute d-flex align-items-center'>
                        <img src={sticker6} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3 text-nowrap'>
                            <p className='text-white mb-1 fs_lg fw-semibold'>March 2022</p>
                            <p className='text-white mb-0 mt-1 fs_xsm fw-normal'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className='image_7 position-absolute d-flex align-items-center'>
                        <img src={sticker7} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3 text-nowrap'>
                            <p className='text-white mb-1 fs_lg fw-semibold'>March 2022</p>
                            <p className='text-white mb-0 mt-1 fs_xsm fw-normal'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                    <div className='image_8 position-absolute d-flex align-items-center'>
                        <img src={sticker8} alt="image1" />
                        <div className='d-flex flex-column timeline_content_box ms-lg-5 ps-3 text-nowrap'>
                            <p className='text-white mb-1 fs_lg fw-semibold'>March 2022</p>
                            <p className='text-white mb-0 mt-1 fs_xsm fw-normal'>1000 Drops Launch on Ethereum</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default RoadMap2