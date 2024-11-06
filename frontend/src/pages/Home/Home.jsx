import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import App from '../../layouts/App.jsx';
import SliderClocks from './SliderClocks/SliderClocks.jsx';
import Wave from '../../components/Waves/Waves.jsx';
import CardRs from './CardsR/CardRs.jsx';
import SliderNews from './SliderNews/SliderNews.jsx';
import SliderCompanies from './SliderCompanies/SliderCompanies.jsx';
import ModalLarge from '../../components/ModalLarge/ModalLarge.jsx';
import FormatDate from "../../components/FormatDate/FormatDate.jsx";
import './Home.css';

export default function Home() {
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
                <section id='sectionMain' className='container-xl d-flex justify-content-between py-5'>
                    <div className='text-white d-flex flex-column justify-content-center gap-3' id='sectionMainContent'>
                        <h1>
                            <span className='opacity-75'>Sustentabilidade <br /> pequenas atitudes <br /> grandes</span> <span className='fw-bold' id='impactTextLine'>impactos</span>
                        </h1>
                        <p className='fs-5 opacity-75'>Nós somos uma comunidade com o <br /> objetivo de promover a concientização <br /> embiental!</p>
                    </div>

                    <div className='row h-100' id='sectionMainClock'>
                        <div className='col-12 my-auto'>
                                <SliderClocks/>
                        </div>
                    </div>
                </section>

                <Wave>
                    <div className='container pb-5' id='sectionJoin'>
                        <h1 className='text-white text-center'>
                            Junte-se conosco!
                            <hr className='lineTitleBgGreen' />    
                        </h1>

                        <div className='text-white d-flex justify-content-between mt-5' id='sectionJoinContent'>
                            <div className='w-75 d-flex flex-column align-items-center'>
                                <h2 className='p-2 rounded-4 w-50 fs-4 text-center' style={{ backgroundColor: '#044600' }}>Ações consciente, futuro sustentável</h2>

                                <p className='fs-5 text-center lh-lg mt-4 w-50'>Unidos pela sustentabilidade, construímos o futuro. Cada ação consciente transforma o amanhã. Juntos, fazemos a diferença para o planeta.</p>
                            </div>

                            <div className='d-flex flex-column align-items-center w-25'>
                                <h2>Venha fazer parte!</h2>

                                <Link to={`/partnerships`} className='nav-link text-center fs-4 shadow mt-4' id='btnJoin'>Junte-se</Link>
                            </div>
                        </div>
                    </div>
                </Wave>

                <section id='sectionCompanies' className='container py-5'>
                    <h1 className='text-white text-center'>
                        Empresas
                        <hr className='lineTitleBgDark' /> 
                    </h1>

                    <div>
                        <SliderCompanies handleOpenModal={handleOpenModal}/>
                    </div>
                </section>

                <section id='sectionFiveR' className='px-5 d-flex flex-wrap justify-content-around gap-5'>
                    <CardRs borderColor='#00FF00'>
                        Reciclar    
                    </CardRs>

                    <CardRs borderColor='#FF9500'>
                        Reduzir
                    </CardRs>

                    <CardRs borderColor='#0497FF'>
                        Reutilizar
                    </CardRs>

                    <CardRs borderColor='#FF0000'>
                        Recusar    
                    </CardRs>

                    <CardRs borderColor='#FFFF00'>
                        Repensar    
                    </CardRs>
                </section>

                <section id='sectionNews' className='container py-5'>
                    <h1 className='text-white text-center'>
                        Notícias
                        <hr className='lineTitleBgDark' />
                    </h1>

                    <div>
                        <SliderNews handleOpenModal={handleOpenModal}/>
                    </div>
                </section>

                <ModalLarge idModal="modalLargeCompanies" titleModal="Empresas" Buttons={<button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>}> 
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

                <ModalLarge idModal="modalLargeNews" titleModal="Notícias" Buttons={<button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>}> 
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
            </App>
        </>
    )
}
