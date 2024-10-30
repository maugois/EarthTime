import React from 'react'
import { useState, useEffect } from 'react';
import App from '../../layouts/App.jsx'
import LabelTitle from '../../components/LabelTitle/LabelTitle.jsx'
import SliderCardHorizontalCompanies from './SliderCardHorizontalCompanies/SliderCardHorizontalCompanies.jsx'
import Waves from '../../components/Waves/Waves.jsx'
import ModalLarge from '../../components/ModalLarge/ModalLarge.jsx'
import image from '../../assets/images/imagePlanet.jfif'
import imageTwo from '../../assets/images/natureImage.jfif'
import './Companies.css'
import PaginationCompanies from './PaginationCompanies/PaginationCompanies.jsx';

export default function Companies() {
    const [selectedArticle, setSelectedArticle] = useState({});

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        isAtTop: window.scrollY === 0,
    });

    const handleOpenModal = (article) => {
        setSelectedArticle(article);
    };

    useEffect(() => {
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

    const isMobile = windowSize.width <= 990;

    return (
        <>
            <App>
                <div className='container mt-5 mb-5 d-flex' id='containerCompanies'>
                    <section id='sectionCompanies' className="text-white w-50">
                        <div className="d-flex flex-column mt-4 gap-4" style={{ width: '90%' }}>
                            <LabelTitle bgColor="#2c885175">Empresas</LabelTitle>
                            <h2 className='lh-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            <p className='lh-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Minus, perferendis delectus quisquam eum reprehenderit, quis accusamus aspernatur quasi, et rem error temporibus debitis nisi architecto eos ab dolorem.</p>
                        </div>
                    </section>
                    
                    <section id='sectionImages' className="d-flex gap-4 justify-content-center align-items-center w-50">
                        <div className='groupCards w-50'>
                            <div className="card shadow" style={{ height: '470px', border: 'none' }}>
                                <img src={image} className='card-img object-fit-cover h-100 w-100' alt="" />
                            </div>
                        </div>
                        
                        <div className='groupCards w-50 mt-5'>
                            <div className="card shadow" style={{ height: '470px', border: 'none' }}> 
                                <img src={imageTwo} className='card-img object-fit-cover h-100 w-100' alt="" />   
                            </div>
                        </div>
                    </section>
                </div>

                <Waves>
                    <h1 className='text-white text-center'>
                        Destaques
                        <hr className='mx-auto lineTitleBgGreen' />
                    </h1>

                    <SliderCardHorizontalCompanies handleOpenModal={handleOpenModal} />
                </Waves>

                <div className="pt-5">
                    <h1 className='text-center text-white'>
                        Empresas
                        <hr className='mx-auto lineTitleBgDark' />
                    </h1>
                    
                    <PaginationCompanies handleOpenModal={handleOpenModal} />
                </div>

                <ModalLarge idModal="modalLargeCompanies" titleModal="Empresas"> 
                    <div className='row text-white m-auto'>
                        <div className={isMobile ? 'col-12' : 'col-7'}>
                            <span className="badge rounded-pill bg-danger py-2 px-4 mb-4 mt-2 text-uppercase">{selectedArticle.branch}</span>
                            <h2>{selectedArticle.title}</h2>
                            <p className='my-4 opacity-75'>{selectedArticle.description}</p>
                            <p className='my-3'>
                                Link: <a href={selectedArticle.urlCompany} target="_blank" className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'>{selectedArticle.urlCompany}</a>
                            </p>
                        </div>
                        <div className={isMobile ? 'col-12' : 'col-5'}>
                            <img src={selectedArticle.imageUrl} className="img-fluid rounded object-fit-cover h-100 w-100" alt={selectedArticle.title} />
                        </div>
                    </div>
                </ModalLarge>
            </App>
        </>
    )
}
