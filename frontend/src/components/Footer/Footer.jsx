import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logoEarthTime.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer id='footer-container'>
                <div className='container text-white p-4'>
                    <div id='footer-info' className='d-flex flex-column align-items-center justify-content-center'>
                        <Link to={"/"} className='nav-link  mt-4 logo'>
                            <img src={logo} className='w-100' alt="Logo EarthTime" />
                        </Link>

                        <p className='text-center mt-5 fs-1 fst-italic fw-light customLineText'>Cuidar do planeta é cuidar de nós</p>
                    </div>

                    <div id='footer-links' className='d-flex justify-content-around flex-wrap'>
                        <div className='text-center mt-4'>
                            <h2 className='text-uppercase fw-normal customLineLinks'>Contato</h2>
                            <ul className='nav flex-column mt-2'>
                                <li className='nav-link text-white fa-2x linkHover'>earthtime@gmail.com</li>
                                <li className='nav-link text-white fa-2x linkHover'>(11) 99999-9999</li>
                            </ul>
                        </div>

                        <div className='text-center mt-4'>
                            <h2 className='text-uppercase fw-normal customLineLinks'>Navegue por</h2>
                            <ul className='nav flex-column mt-2'>
                                <li><Link to={"/"} className='nav-link text-white fa-2x linkHover'>Home</Link></li>
                                <li><Link to={"/about"} className='nav-link text-white fa-2x linkHover'>About</Link></li>
                                <li><Link to={"/companies"} className='nav-link text-white fa-2x linkHover'>Companies</Link></li>
                                <li><Link to={"/partnerships"} className='nav-link text-white fa-2x linkHover'>Partnerships</Link></li>
                            </ul>
                        </div>

                        <div className='text-center mt-4'>
                            <h2 className='text-uppercase fw-normal customLineLinks'>Redes sociais</h2>
                            <ul className='nav d-flex justify-content-center mt-3'>
                                <li><Link to={"/"} className='nav-link'><FontAwesomeIcon icon={faLinkedin} className='text-white fa-2x linkHover'/></Link></li>
                                <li><Link to={"/"} className='nav-link'><FontAwesomeIcon icon={faFacebook} className='text-white fa-2x linkHover'/></Link></li>
                                <li><Link to={"/"} className='nav-link'><FontAwesomeIcon icon={faInstagram} className='text-white fa-2x linkHover'/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='copyright' className='text-center p-2'>
                    <p className='text-white mb-0'>&copy; 2024 Earth Time. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}   