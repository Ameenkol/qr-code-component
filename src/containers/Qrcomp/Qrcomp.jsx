import React from 'react'
import { images } from "../Assets/index.js";
import './Qrcomp.scss';

const Qrcomp = () => {
  return (
    <>
      <div className='qrcomp'>
        <div className='qrcomp__info'>
          <img className='qrcomp__info-img' src={images.qrcode} alt="qr-code" />
          
          <div className='qrcomp__info-body'>
            <h5>Improve your front-end skills by building projects</h5>
            
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qrcomp
