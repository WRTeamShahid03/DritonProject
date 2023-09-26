import React from 'react'
import heroBg from '../../Assets/Images/bk-hero.svg'
// import { FaBuildingColumns } from "react-icons/fa";

const HeroSect = () => {
    return (
        <>
            <section id='heroSect'>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="heroWrap">
                                <div className="heroHeadline">
                                     {/* <FaBuildingColumns color='white' size={50} /> */}
                                    <h1 className=''><span>Strongtools</span> Best MarketPlace for <span>Buy & Sale</span></h1>
                                </div>
                                <div className="heroDesc">
                                    <span>Strongtools is a marketplace for buying and selling accounts, services and tools. We are a community of creators and crackers who are committed to offer the best service for your work.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="heroBg">
                                <div className="heroBgImg">
                                    <img src={heroBg.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HeroSect
