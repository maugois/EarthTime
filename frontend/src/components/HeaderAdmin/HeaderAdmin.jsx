import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoEarthTime.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered, faArrowRightFromBracket, faHouse, faUser, faBriefcase, faFile } from '@fortawesome/free-solid-svg-icons';
import './HeaderAdmin.css';

export default function HeaderAdmin() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar bartop shadow-sm fixed-top">
                <div className="container-fluid">
                    <p className="navbar-brand text-white text-end m-0 p-0"> Earth Timer</p>
                </div>
            </nav>

            <div className={`sidebar shadow ${isOpen ? 'open' : ''}`}>
                <div className="logo-details">
                    <img src={logo} className='w-100' alt="Logo EarthTime" style={{ display: isOpen ? 'block' : 'none' }} />
                    <div className="iconHeaderAdmin" id='btn' onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={isOpen ? faBarsStaggered : faBars} />
                    </div>
                </div>
        
                <ul className="nav-list">
                    <li>
                        <Link to="/homeAdmin" className="link">
                            <div className='iconHeaderAdmin'>
                                <FontAwesomeIcon icon={faHouse} />
                            </div>
                            <span className="links_name">Home</span>
                        </Link>
                        <span className="tooltip">Home</span>
                    </li>

                    <li>
                        <Link to="/userAdmin" className="link">
                            <div className='iconHeaderAdmin'>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <span className="links_name">Usuários</span>
                        </Link>
                        <span className="tooltip">Usuários</span>
                    </li>
                    
                    <li>
                        <Link to="/companiesAdmin" className="link">
                            <div className='iconHeaderAdmin'>
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <span className="links_name">Empresas</span>
                        </Link>
                        <span className="tooltip">Empresas</span>
                    </li>
                    
                    <li>
                        <Link to="/solicitationAdmin" className="link">
                            <div className='iconHeaderAdmin'>
                                <FontAwesomeIcon icon={faFile} />
                            </div>
                            <span className="links_name">Solicitações</span>
                        </Link>
                        <span className="tooltip">Solicitações</span>
                    </li>
                    
                    <li className="profile">
                        <div className="profile-details">
                            <div className="name_job">
                                <div className="name">Nome do Cliente</div>
                                <div className="job">Seja Bem-Vindo</div>
                            </div>
                        </div>
                        
                        <a href="logout.php">
                            <div className='iconHeaderAdmin' id="log_out">
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}