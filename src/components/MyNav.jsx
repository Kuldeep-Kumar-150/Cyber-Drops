import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import pageLogo from '../assets/image/svg/page_logo.svg'
import navIcon1 from '../assets/image/svg/nav_icon_1.svg'
import navIcon2 from '../assets/image/svg/discord.svg'
import navIcon3 from '../assets/image/svg/twitter.svg'
import navIcon4 from '../assets/image/svg/nav_icon_4.svg'

const MyNav = () => {
    const [Nav, setnav] = useState(true)
    if (Nav) {
        document.body.style.overflow = "visible"
    }
    else (
        document.body.style.overflow = "hidden"
    )
    return (
        <header className='py-2'>
            <nav>
                <Container>
                    <div className='d-flex justify-content-between align-items-center'>
                        <a className='z_index_5' href="#"><img src={pageLogo} alt="logo" /></a>
                        <div className={Nav ? "d-flex align-items-center hide-nav" : "d-flex align-items-center show-nav"}>
                            <div className='d-flex flex-column text-center text-lg-start justify-content-center align-items-center'>
                                <ul className='d-flex flex-column flex-lg-row align-items-center p-0 m-0 gap-4'>
                                    <button className='d-lg-none btn-close position-absolute top-0 end-0 me-5 mt-5 close_btn' onClick={() => setnav(true)}></button>
                                    <li><a className='text-white navLinks position-relative' href="#">Home</a></li>
                                    <li><a className='text-white navLinks position-relative' href="#">About</a></li>
                                    <li><a className='text-white navLinks position-relative' href="#">Team</a></li>
                                    <li><a className='text-white navLinks position-relative' href="#">Roadmap</a></li>
                                    <li><a className='text-white navLinks position-relative' href="#">Partners</a></li>
                                    <li className='d-none d-lg-flex position-relative'><a href='#' className="nav_icon_box z_index_5 ms-lg-3 d-flex align-items-center justify-content-center">
                                        <img src={navIcon1} alt="icons" />
                                        <div className="nav_icons"></div>
                                    </a></li>
                                    <li className='d-none d-lg-flex position-relative'><a href='#' className="nav_icon_box d-flex align-items-center justify-content-center">
                                        <img src={navIcon2} alt="icons" />
                                        <div className="nav_icons"></div></a></li>
                                    <li className='d-none d-lg-flex position-relative'>  <a href='#' className="nav_icon_box d-flex align-items-center justify-content-center">
                                        <img src={navIcon3} alt="icons" />
                                        <div className="nav_icons"></div></a></li>
                                    <li className='d-none d-lg-flex position-relative'>  <a href='#' className="nav_icon_box d-flex align-items-center justify-content-center">
                                        <img src={navIcon4} alt="icons" />
                                        <div className="nav_icons"></div></a></li>
                                    <li className='d-none d-lg-flex position-relative'><a className='fs_xsm text-white nav_btn' href="#">Connect Wallet</a></li>
                                </ul>
                                <div className='d-lg-none d-flex my-4'>
                                    <a href='#' className=" position-relativemx-2 nav_icon_box ms-lg-3 d-flex align-items-center justify-content-center">
                                        <img src={navIcon1} alt="icons" />
                                        <div className="nav_icons"></div></a>
                                    <a href='#' className="mx-3 position-relativemx-2 nav_icon_box d-flex align-items-center justify-content-center">
                                        <img src={navIcon2} alt="icons" />
                                        <div className="nav_icons"></div></a>
                                    <a href='#' className=" position-relativemx-2 nav_icon_box d-flex align-items-center justify-content-center">
                                        <img src={navIcon3} alt="icons" />
                                        <div className="nav_icons"></div></a>
                                    <a href='#' className="mx-3 position-relativemx-2 nav_icon_box d-flex align-items-center justify-content-center">
                                        <img src={navIcon4} alt="icons" />
                                        <div className="nav_icons"></div></a>
                                </div>
                                <div className='d-lg-none'>
                                    <li><a className='fs_xsm text-white nav_btn' href="#">Connect Wallet</a></li>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-2 d-lg-none' onClick={() => setnav(false)}>
                            <span className='menu_icon'></span>
                            <span className='menu_icon'></span>
                            <span className='menu_icon'></span>
                        </div>
                    </div>
                    <div className="header_position_img"></div>
                </Container>
            </nav>
        </header>
    )
}

export default MyNav