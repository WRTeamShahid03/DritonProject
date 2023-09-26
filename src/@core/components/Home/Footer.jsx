import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer id='homeFooter' className='container'>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="footerDiv">
                    <span>©2023 Strongtools</span>
                    <span> <FaTelegramPlane/> <FaTelegramPlane/> </span>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
