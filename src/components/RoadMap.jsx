import React from 'react'
import { Container } from 'react-bootstrap'


const RoadMap = () => {
    return (
        <section className='timeline_bgimage mt-5 pt-5 position-relative overflow-hidden'>
            
            <Container>
                <h5 className='fs_48 fw-bold text-white text-center mb-3'>Road <span className='clr_khakhi'>Map</span></h5>
                <div className="timeline">
                    <div className="timeline_box right">
                        <div className="content_box">
                            <h2 className="text-white fs_lato fw-semibold fs_lg">
                                March 2022
                            </h2>
                            <p className="text-white fs_lato fw-normal fs_xsm">
                                1000 Drops Launch on Ethereum
                            </p>
                        </div>
                    </div>
                    <div className="timeline_box left">
                        <div className="content_box align-items-lg-end d-flex flex-column">
                            <h2 className="text-white fs_lato fw-normal fs_lg">
                                March 2022
                            </h2>
                            <p className="text-white fs_lato fw-normal fs_xsm">
                                1000 Drops Launch on Ethereum
                            </p>
                        </div>
                    </div>
                    <div className="timeline_box right">
                        <div className="content_box">
                            <h2 className="text-white fs_lato fw-semibold fs_lg">
                                March 2022
                            </h2>
                            <p className="text-white fs_lato fw-normal fs_xsm">
                                Creation of Treasury
                            </p>
                        </div>
                    </div>
                    <div className="timeline_box left">
                        <div className="content_box align-items-lg-end d-flex flex-column">
                            <h2 className="text-white fs_lato fw-normal fs_lg">
                                April 2022
                            </h2>
                            <p className="text-white fs_lato fw-normal fs_xsm">
                                Our First Airdrop
                            </p>
                        </div>
                    </div>
                    <div className="timeline_box right">
                        <div className="content_box">
                            <h2 className="text-white fs_lato fw-normal fs_lg">
                                June 2022
                            </h2>
                            <p className="text-white fs_lato fw-normal fs_xsm">
                                Major Collabs
                            </p>
                        </div>
                    </div>
                    <div className="timeline_box left">
                        <div className="content_box align-items-lg-end d-flex flex-column">
                            <h2 className="text-white fs_lato fw-normal fs_lg">
                                Sometime in Q3
                            </h2>
                            <p className="text-white fs_lato fw-normal fs_xsm">
                                Cyber Celebs come on Ethereum
                            </p>
                        </div>
                    </div>
                    <div className="timeline_box right">
                        <div className="content_box">
                            <h2 className="text-white fs_lato fw-normal fs_lg">
                                Sometime in Q3
                            </h2>
                            <p className="text-white fs_lato fw-normal fs_xsm">
                                Streetwear + Merch
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline_box left ">
                    <div className="content_box align-items-lg-end d-flex flex-column">
                        <h2 className="text-white fs_lato fw-normal fs_lg">
                            Sometime in Q4
                        </h2>
                        <p className="text-white fs_lato fw-normal fs_xsm">
                            Enhanced Partnerships
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default RoadMap