import React from 'react'
import contactBg from '../../Assets/Images/bk-pat-2.jpg'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'

const ContactUs = () => {
    return (
        <>
            <section id='contact' style={{
                background: `url(${contactBg.src})`,
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="contactHeading">
                                <h2 className='common_h_tags'>Contact Us</h2>
                                <p className='commom_p_tags'>We are always happy to hear from you. Please feel free to contact us with any questions you may have through system tickets. </p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="contactBtns">
                                <Link href='/register'>
                                    <span className='cBtn rgBtn'>Register <FaArrowRightLong /></span>
                                </Link>

                                <Link href='https://t.me/+KvmHp-U8VnM4OTAx' target='_blank'>
                                    <span className='cBtn tlBtn'>Telegram <FaTelegramPlane /></span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default ContactUs