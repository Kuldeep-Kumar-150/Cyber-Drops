import React from 'react'
import { Container } from 'react-bootstrap'
import footerLogo from '../assets/image/svg/footer_logo.svg'
import navIcon1 from '../assets/image/svg/nav_icon_1.svg'
import navIcon2 from '../assets/image/svg/discord.svg'
import navIcon3 from '../assets/image/svg/twitter.svg'
import navIcon4 from '../assets/image/svg/nav_icon_4.svg'

const MyFooter = () => {
    return (
        <footer className='mt-5 pt-lg-5 position-relative'>
            <div className='bg_blur_elipse5'></div>
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center text-center">
                    <a href="#"><img src={footerLogo} alt="footerLogo" /></a>
                    <h3 className='fs_2xl clr_khakhi fw-semibold mt-2'>Cyber Drops</h3>
                    <p className='fs_xsm fw-normal text-white mb-0'>Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet.</p>
                    <div className='my-3 d-flex align-items-center'>
                        <a href='#' className="position-relative mx-2 nav_icon_box ms-lg-3 d-flex align-items-center justify-content-center">
                            <img src={navIcon1} alt="icons" />
                            <div className="nav_icons"></div></a>
                        <a href='#' className="position-relative mx-2 nav_icon_box d-flex align-items-center justify-content-center">
                            <img src={navIcon2} alt="icons" />
                            <div className="nav_icons"></div></a>
                        <a href='#' className="position-relative mx-2 nav_icon_box d-flex align-items-center justify-content-center">
                            <img src={navIcon3} alt="icons" />
                            <div className="nav_icons"></div></a>
                        <a href='#' className="position-relative mx-2 nav_icon_box d-flex align-items-center justify-content-center">
                            <img src={navIcon4} alt="icons" />
                            <div className="nav_icons"></div></a>
                    </div>
                </div>
            </Container>
            <div className="footer_line mt-2"></div>
            <Container>
                <h5 className='text-center clr_lightblack py-3 mb-0'>Copyright By 2022</h5>
            </Container>
        </footer>
    )
}

export default MyFooter