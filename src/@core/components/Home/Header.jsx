import React, { useEffect, useState } from 'react'
import navLogo from '../../Assets/Images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                document.querySelector('header').classList.add('sticky');
            } else {
                document.querySelector('header').classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className="navLogo">
                                <div className="logo">
                                    <img src={navLogo.src} alt="" />
                                </div>
                                <span>StrongTool</span>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">

                            <div className="spanDiv" style={{ float: 'right' }}>

                                <span onClick={handleShow} id='hamburg'><GiHamburgerMenu size={30} /></span>
                            </div>

                            <Navbar expand="lg" id="header" className='nav container'>



                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto navFlex">
                                        <Link className="nav-link" href="#heroSect"> Home</Link>

                                        <Link className="nav-link" href="#features">Feature</Link>

                                        <Link className='nav-link' href='#about'> About </Link>


                                        <Link className="nav-link" href="#payments">Payment</Link>

                                        <Link className="nav-link" href="#faq">FAQ</Link>

                                        <Link className="nav-link" href="#contact">Contact
                                        </Link>
                                        <div className="btns">
                                            <Link href="/register" className='register'> Register</Link>
                                            <Link href="/login" className='login'> Login</Link>
                                        </div>
                                    </Nav>


                                </Navbar.Collapse>


                            </Navbar>

                        </div>

                    </div>

                    <Offcanvas show={show} onHide={handleClose} placement='end'
                        scroll={true}
                        backdrop={true}>
                        <Offcanvas.Header closeButton className='btn-close-white'>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto navFlex">
                                <Link className="nav-link" href="#heroSect"> Home</Link>

                                <Link className="nav-link" href="#features">Feature</Link>

                                <Link className='nav-link' href='#about'> About </Link>


                                <Link className="nav-link" href="#payments">Payment</Link>

                                <Link className="nav-link" href="#faq">FAQ</Link>

                                <Link className="nav-link" href="#contact">Contact
                                </Link>
                                <div className="btns">
                                    <Link href="/register" className='register'> Register</Link>
                                    <Link href="/login" className='login'> Login</Link>
                                </div>
                            </Nav>

                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </header>
        </>
    )
}

export default Header
