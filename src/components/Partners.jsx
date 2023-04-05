import React from 'react'
import playBit from '../assets/image/svg/playbit.svg'
import capital from '../assets/image/svg/24.svg'
import hive from '../assets/image/svg/hive.svg'
import circleGroup from '../assets/image/svg/circles_group.svg'
import { Col, Container, Row } from 'react-bootstrap'

const Partners = () => {
  return (
    <section className='mt-5'>
      <Container className='pt-lg-5 mt-lg-5'>
        <h3 className='fs_48 fw-bold text-white text-center mb-5 mb-xl-0'>Part<span className='clr_khakhi'>ners</span></h3>
      </Container>
      <div className="partner_section_bgimage py-xl-5">
        <Container className='py-xl-5'>
          <div className="pt-5 pb-2 d-xl-flex align-items-center d-flex flex-column flex-xl-row justify-content-center">
            <div className="align-items-center d-flex">
              <div className='text-center'>
                <img className='w-100' src={playBit} alt="playBit" />
                <p className='fs_sm fw-bold pt-3'>Playbit</p>
              </div>
              <div className="text-center">
                <img className='ps-4 w-100' src={capital} alt="images" />
                <p className='fs_sm fw-bold pt-3'>24 Capital</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="text-center">
                <img className='ps-lg-4 w-100' src={hive} alt="images" />
                <p className='fs_sm fw-bold pt-3'>TradingHive</p>
              </div>
              <div className="text-center">
                <img className='ps-4 w-100' src={circleGroup} alt="images" />
                <p className='fs_sm fw-bold pt-3'>Focus Group Equities</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Partners