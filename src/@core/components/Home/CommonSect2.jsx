import React from 'react'

const CommonSection2 = ({ cardTitle, subHead, cardText, sectionImg, icon }) => {
    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-6 commonSect2">
                <div className="aboutImg">
                    <img src={sectionImg.src} alt="" />
                </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="card">
                    <span className='card1Img'> {icon}</span>
                    <div className="card-body">
                        <h5 className="card-title">{cardTitle}</h5>
                        <span className='subHead'>{subHead}</span>
                        <p className="card-text">{cardText}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CommonSection2
