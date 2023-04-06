import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import capImage from '../assets/image/svg/cap_img_4.svg'
import { Container } from 'react-bootstrap'

const Faqs = () => {
    return (
        <section className='py-sm-5 my-5 position-relative'>
            <div className="bg_blur_elipse4 position-absolute"></div>
            <div className='capImage6 position-absolute'><img src={capImage} alt="capImage" /></div>
            <Container>
                <h5 className='clr_khakhi fs_48 fw-bold text-center mb-5 pb-3'>FAQ <span className='text-white'>’s</span></h5>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" className='rounded-2 accordion_width_xl mx-auto'>
                        <Accordion.Header>Egestas scelerisque duis quis aliquet. Consectetur?</Accordion.Header>
                        <Accordion.Body>
                            Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                        </Accordion.Body>
                    </Accordion.Item>
                    <div className="mt-4 accordion_width_xl mx-auto">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Ac nec enim amet, leo lorem quis neque vitae aliquet?</Accordion.Header>
                            <Accordion.Body>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className="mt-4 accordion_width_xl mx-auto">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh donec?</Accordion.Header>
                            <Accordion.Body>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className="mt-4 accordion_width_xl mx-auto">
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Porta amet tortor nec pulvinar urna. Et blandit sit id?</Accordion.Header>
                            <Accordion.Body>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                    <div className="mt-4 accordion_width_xl mx-auto">
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Tellus hendrerit fermentum ut hendrerit ac vestibulum? </Accordion.Header>
                            <Accordion.Body>
                                Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam egestas feugiat amet. Ut nibh vulputate.
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                </Accordion>
            </Container>
        </section>
    )
}

export default Faqs