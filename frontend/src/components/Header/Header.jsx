import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import OffCanvas from '../OffCanvas/OffCanvas.jsx';
import logo from '../../assets/images/logoEarthTime.svg';
import './Header.css';
  
export default function Header() {
    // Inicializa o estado com o tamanho atual da janela
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        isAtTop: window.scrollY === 0,
    });
    
    useEffect(() => {
        // Função para atualizar o tamanho da janela
        const handleResizeAndScroll = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isAtTop: window.scrollY === 0,
            });
        };
    
        // Adiciona event listeners para 'resize' e 'scroll'
        window.addEventListener('resize', handleResizeAndScroll);
        window.addEventListener('scroll', handleResizeAndScroll);

        // Remove os event listeners ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResizeAndScroll);
            window.removeEventListener('scroll', handleResizeAndScroll);
        };
    }, []);

    const isMobile = windowSize.width <= 768;
    const isTop = windowSize.isAtTop;

    return (
        <>
            <header className='fixed-top'>
                <nav id={isTop ? 'headerContainerTop' : 'headerContainerFixed'} className="navbar shadow rounded-bottom-4">
                    <div className="container">
                        <Link to={"/"} className='nav-link navbar-brand logo'>
                            <img src={logo} className='w-100' alt="Logo EarthTime" />
                        </Link>

                        {isMobile && ( // Se for mobile, mostrar o OffCanvas
                            <OffCanvas title="Menu">          
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">                      
                                    <li className="nav-item">
                                        <Link to={"/"} className="nav-link text-center fs-5 lineHover" aria-current="page">Início</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to={"/companies"} className="nav-link text-center fs-5 lineHover">Empresas</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to={"/news"} className="nav-link text-center fs-5 lineHover">Notícias</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to={"/about"} className="nav-link text-center fs-5 lineHover">Sobre</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to={"/partnerships"} className="nav-link text-center fs-5 lineHover">Parceria</Link>
                                    </li>
                                </ul>
                            </OffCanvas>
                        )}

                        {!isMobile && ( // Se não for mobile, mostrar os links
                            <div>
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link to={"/"} className="nav-link text-white lineHover" aria-current="page">Início</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to={"/companies"} className="nav-link text-white lineHover">Empresas</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to={"/news"} className="nav-link text-white lineHover">Notícias</Link>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link to={"/about"} className="nav-link text-white lineHover">Sobre</Link>
                                    </li>
                                    
                                    <li className="nav-item ms-2">
                                        <Link to={"/partnerships"} className="nav-link text-dark shadow-sm" id='btnPartnership'>Parceria</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    )
}   