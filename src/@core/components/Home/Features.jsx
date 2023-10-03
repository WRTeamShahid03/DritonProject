import React from 'react'
import { BsCheck, BsClockFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaTools, FaShieldAlt } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";

const Features = () => {

    const cardData = [
        {
            id: 0,
            title: "Accounts",
            desc: "We allow huge variety of accounts for sale. Dating, Streaming, Gaming, and many more.",
            btn1: "Dating",
            btn2: "Shopping",
            btn3: "Shipping",
            btn4: "VPN",
            btn5: "Streaming",
            btn6: "Foods",
        },
        {
            id: 1,
            title: "Tools",
            desc: "You can find RDP, SMTP, Proxies, Leads, Fullz, and many more.",
            btn1: "RDP",
            btn2: "cPanel",
            btn3: "SMTP",
            btn4: "Leads",
            btn5: "CEO-CFO",
            btn6: "SMS Service",
        },
        {
            id: 2,
            title: "Methods",
            desc: "Find methods to make money online. Cracking, Carding, and many more.",
            btn1: "Cracking",
            btn2: "Spamming",
            btn3: "Letters",
            btn4: "Scripts",
            btn5: "Business",
            btn6: "Cashout",
        },

    ]

    const card2Data = [
        {
            id: 0,
            icon: <FaShieldAlt color='white' size={30} />,
            title: "Security",
            desc: "Strongtools is secured marketplace. We have 2FA and Escrow system.",
        },
        {
            id: 1,
            icon: <BiSupport color='white' size={30} />,
            title: "Support",
            desc: "Strongtools has 24/7 support. You can contact us anytime.",
        },
        {
            id: 2,
            icon: <BsClockFill color='white' size={30} />,
            title: "Instant Delivery",
            desc: "Strongtools has instant delivery system. You will get your product instantly.",
        },
    ];

    return (
        <>
            <section id='features'>
                <div className="container">
                    <div className="row cardsWrapper">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h2 className='common_h_tags'>Features</h2>
                            <p className='commom_p_tags'>Explore the features of Strongtools</p>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4" >
                            <div className="card card1">
                                <span className='card1Img'><BsCheck color='white' size={50} /></span>
                                <div className="card-body">
                                    <h5 className="card-title">{cardData[0].title}</h5>
                                    <p className="card-text">{cardData[0].desc}</p>
                                    <div className="row">
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[0].btn1}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[0].btn2}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[0].btn3}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[0].btn4}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[0].btn5}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[0].btn6}</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4" >
                            <div className="card card1">
                                <span className='card1Img'><FaTools color='white' size={30} /></span>
                                <div className="card-body">
                                    <h5 className="card-title">{cardData[1].title}</h5>
                                    <p className="card-text">{cardData[1].desc}</p>
                                    <div className="row">
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[1].btn1}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[1].btn2}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[1].btn3}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[1].btn4}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[1].btn5}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[1].btn6}</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-4" >
                            <div className="card card1">
                                <span className='card1Img'><FaBuildingColumns color='white' size={30} /></span>
                                <div className="card-body">
                                    <h5 className="card-title">{cardData[2].title}</h5>
                                    <p className="card-text">{cardData[2].desc}</p>
                                    <div className="row">
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[2].btn1}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[2].btn2}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[2].btn3}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[2].btn4}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[2].btn5}</span>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <span className='cardBtn'>{cardData[2].btn6}</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        {
                            card2Data.map((e) => {
                                return <div className="col-sm-12 col-md-6 col-lg-4" key={e.id}>
                                    <div className="card card1">
                                        <span className='card1Img'>{e.icon}</span>
                                        <div className="card-body">
                                            <h5 className="card-title">{e.title}</h5>
                                            <p className="card-text">{e.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
