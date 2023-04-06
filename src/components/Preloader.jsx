import React from 'react'
import pageLogo from '../assets/image/svg/page_logo.svg'
import { Container } from 'react-bootstrap'

const Preloader = () => {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none"
        document.body.classList.remove("overflow-hidden")
    }, 3000)
    return (
        <section>
            <Container>
                <div className="preloader">
                    <div className="d-flex align-items-center justify-content-center preloader bg-black">
                        <div className="preloader_animation"><img src={pageLogo} alt="pageLogo" /></div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Preloader