import React from 'react'
import { useState, useEffect } from 'react';
import App from '../../layouts/App.jsx'
import LabelTitle from '../../components/LabelTitle/LabelTitle.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCardHorizontalNews from './SliderCardHorizontalNews/SliderCardHorizontalNews.jsx'
import SliderCardVerticalNews from './SliderCardVerticalNews/SliderCardVerticalNews.jsx'
import ModalLarge from '../../components/ModalLarge/ModalLarge.jsx';
import FormatDate from "../../components/FormatDate/FormatDate.jsx";
import image from '../../assets/images/wave.png';
import './News.css'

export default function News() {
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
                <div className='container mt-5 mb-5'>
                   <article className='d-flex flex-column align-items-center text-white mb-5'>
                        <LabelTitle bgColor="#dc35456e">Recentes</LabelTitle>
                        <div className='w-100'>
                            <SliderCardHorizontalNews handleOpenModal={handleOpenModal} />
                        </div>
                   </article>
                   <article className='d-flex flex-column align-items-center text-white mb-5'>
                        <LabelTitle bgColor="#dc35456e">Geral</LabelTitle>
                        <div className='w-100'>
                            <SliderCardVerticalNews handleOpenModal={handleOpenModal} />
                        </div>
                   </article>
                </div>

                <ModalLarge idModal="modalLargeNews" titleModal="Notícias"> 
                    <div className='row text-white m-auto'>
                        <div className={isMobile ? 'col-12' : 'col-7'}>
                            <span className="badge rounded-pill bg-danger py-2 px-4 mb-4 mt-2 text-uppercase">Atenção</span>
                            <h2>{selectedArticle.title}</h2>
                            <p className='my-4 opacity-75'>{selectedArticle.description}</p>
                            <p className='my-3'>
                                Link: <a href={selectedArticle.url} target="_blank" className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'>{selectedArticle.url}</a>
                            </p>
                            <p className="d-flex flex-column">
                                {selectedArticle.author}
                                <small className="opacity-75">{FormatDate(selectedArticle.publishedAt)}</small>
                            </p>
                        </div>
                        <div className={isMobile ? 'col-12' : 'col-5'}>
                            <img src={selectedArticle.urlToImage} className="img-fluid rounded object-fit-cover h-100 w-100" alt={selectedArticle.title} />
                        </div>
                    </div>
                </ModalLarge>

                <img src={image} className="w-100 position-relative" style={{ top: '20px' }} alt="Imagem de uma onda que faz parte do rodapé"/>
            </App>
        </>
    )
}
