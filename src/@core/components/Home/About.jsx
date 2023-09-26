import React from 'react'
import buyer from '../../Assets/Images/buyer.png'
import support from '../../Assets/Images/support.png'
import seller from '../../Assets/Images/seller.png'
import { FaRegLifeRing, FaUser, FaUsers } from 'react-icons/fa'
import CommonSection1 from './CommonSection1.jsx'
import CommonSection2 from './CommonSect2'

const About = () => {
  return (
    <>
      <section id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h2 className='common_h_tags'> About </h2>
                        </div>

                        <CommonSection1  cardTitle="Buyers" subHead="Get a marketplace for your offers" cardText="We have a great selection of products that are sure to fit your needs. Shop our tools today and enjoy instant delivery, secure checkout and excellent customer service. If you have any questions, our dedicated supports are available to help 24/7." sectionImg={buyer} icon={<FaUsers/>}/>

                        <CommonSection2  cardTitle="Sellers" subHead="Find a marketplace for your needs" cardText="We are proud to offer a wide selection of products from sellers around the world. Our team is dedicated to providing a great experience for both buyers and sellers. We offer secure checkout, instant delivery, and excellent customer service. If you are a vendor, we invite you to join our platform and start selling today your accounts or tools." sectionImg={seller} icon={<FaUser/>}/>



                        <CommonSection1 icon={<FaRegLifeRing/>} sectionTitle="" cardTitle="24/7 Support" cardText="We are here to help you 24/7. Our dedicated support team is available to answer any questions you may have. We are here to help you with any issues you may have with your account or with your purchase." subHead="Get help from our dedicated support team" sectionImg={support}/>

                    </div>
                </div>
            </section>
    </>
  )
}

export default About
