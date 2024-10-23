import React from 'react'
import App from '../../layouts/App.jsx'
import LabelTitle from '../../components/LabelTitle/LabelTitle.jsx'
import SliderCardHorizontal from '../News/SliderCardHorizontal/SliderCardHorizontal.jsx'
import Waves from '../../components/Waves/Waves.jsx'
import './Companies.css'

export default function Companies() {
    return (
        <>
            <App>
                <div className='container mt-5 mb-5 d-flex'>
                    <section id='sectionCompanies' className="text-white w-50">
                        <div className="d-flex flex-column mt-4 gap-4" style={{ width: '90%' }}>
                            <LabelTitle bgColor="#2c885175">Empresas</LabelTitle>
                            <h2 className='lh-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            <p className='lh-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </section>
                    
                    <section id='sectionImages' className="d-flex gap-4 justify-content-center align-items-center w-50">
                        <div className='groupCards'>
                            <img src="" alt="" />
                        </div>
                        
                        <div className='groupCards mt-5'>
                            <img src="" alt="" />
                        </div>
                    </section>
                </div>

                <Waves>
                    <h1 className='text-white text-center'>
                        Destaques
                        <span></span>
                    </h1>

                    <SliderCardHorizontal />
                </Waves>

                <div className='container mt-5 mb-5'> </div>
            </App>
        </>
    )
}
