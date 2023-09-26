import React from 'react'
import girlImg from '../../Assets/Images/girlImg.jpg'
import { FaCloudDownloadAlt, FaStar, FaUser, FaUsers } from 'react-icons/fa'
import { FaBoltLightning } from 'react-icons/fa6'

const Platform = () => {
    return (
        <>
            <section id='platform'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                        <div className="platformImg" style={{ 
                            background: `url(${girlImg.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: 'no-repeat'
                         }}>
                            {/* <img src={girlImg.src} alt="" /> */}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 wrapper">
                        <div className="platFormDiv">
                            <h2 className='heading'>Get a sense of our platform</h2>
                            <div className="dataContainer">
                                <span><FaUsers color='#01c9a7' /> 150K+ Tools and Accounts for sale</span>
                                <span><FaUser color='#01c9a7' /> 115K+ Active users</span>
                                <span><FaStar color='#01c9a7' /> 350+ Active sellers</span>
                                <span><FaBoltLightning color='#01c9a7' /> 750+ Daily transactions</span>
                                <span><FaCloudDownloadAlt color='#01c9a7' />  1500+ Daily Uploads </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Platform
