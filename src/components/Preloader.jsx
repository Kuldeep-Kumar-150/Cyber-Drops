import React from 'react'
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
                    <div className="d-flex align-items-center justify-content-center preloader">
                        <h6 className='preloader_animation text-white fw-bold fs_48'>Cyber-Drops</h6>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Preloader