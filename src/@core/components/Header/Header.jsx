import React from 'react'
import navLogo from '../../Assets/Images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';

const Header = () => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="navLogo">
                                <div className="logo">
                                    <img src={navLogo.src} alt="" />
                                </div>
                                <span>StrongTool</span>
                            </div>
                        </div>

                        <div className="col-lg-8">

                            <Navbar expand="lg" id="header" className='nav container'>

                                <span onClick={handleShow} id='hamburg'><GiHamburgerMenu size={36} /></span>

                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto navFlex">
                                        <Link className="nav-link" href="/"> Home</Link>

                                        <Link className="nav-link" href="/products">Feature</Link>

                                        <Link className='nav-link' href='/AboutUs'> About </Link>


                                        <Link className="nav-link" href="contact-us">Payment</Link>

                                        <Link className="nav-link" href="contact-us">FAQ</Link>

                                        <Link className="nav-link" href="contact-us">Contact
                                        </Link>
                                    </Nav>

                                    <div className="btns">
                                        <Link href="" className='register'> Register</Link>
                                        <Link href="" className='login'> Login</Link>
                                    </div>

                                </Navbar.Collapse>

                            </Navbar>

                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
