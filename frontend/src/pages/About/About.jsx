import React from 'react';
import LabelTitle from '../../components/LabelTitle/LabelTitle.jsx';
import CardAbout from '../../components/CardAbout/Card.jsx';
import App from '../../layouts/App.jsx';
import image from '../../assets/images/wave.png';
import './About.css';

export default function About() {
    return (
        <>
            <App>
                <div id='mainAbout' className="container mt-5 mb-5 d-flex">
                    <section id='sectionInfo' className="text-white w-50">
                        <div className="d-flex flex-column mt-4 gap-4" style={{ width: '90%' }}>
                            <LabelTitle bgColor="#2c885175">Quem Somos?</LabelTitle>
                            <h2 className='lh-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            <p className='lh-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </section>
                    
                    <section id='sectionCards' className="d-flex gap-4 justify-content-center align-items-center w-50">
                        <div className='groupCards'>
                            <CardAbout title={"Missão"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </CardAbout>
                            <CardAbout title={"Valores"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </CardAbout>
                        </div>
                        
                        <div className='groupCards mt-5'>
                            <CardAbout title={"Visão"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </CardAbout>
                            <CardAbout title={"Compromisso"}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </CardAbout>
                        </div>
                    </section>
                </div>

                <img src={image} className="w-100 position-relative" style={{ top: '20px' }} alt="Imagem de uma onda que faz parte do rodapé"/>
            </App>
        </>
    )
}
