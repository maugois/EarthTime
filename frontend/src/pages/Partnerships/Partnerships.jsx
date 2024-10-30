import React from 'react'
import { useState } from 'react';
import App from '../../layouts/App.jsx'
import FormPartnerships from './FormPartnerships/FormPartnerships.jsx';
import FormSolicitation from './FormSolicitation/FormSolicitation.jsx';
import './Partnerships.css';

export default function Partnerships() {
    const [optionForm, setOptionForm] = useState(true);

    const clickOnOption = (verification) => {
        setOptionForm(verification);
    }

    return (
        <>
            <App>
                <div className='container mt-5 mb-5 d-flex justify-content-between gap-5' id='containerPartnerships'>
                    <div id='cardOptionsContainer' className="d-flex flex-column gap-4">
                        <div id='cardOptions' className="list-group shadow-lg">
                            <a href="#" id='optionPartnerships' className="list-group-item list-group-item-action text-center text-uuppercase fs-5" onClick={() => clickOnOption(true)}>Parceria</a>
                            <a href="#" className="list-group-item list-group-item-action text-center text-uuppercase fs-5" onClick={() => clickOnOption(false)}>Solicitação</a>
                        </div>

                        <div className="card border-success mb-3 text-white cardCustomObservation">
                            <div className="card-header fs-5">Orientação</div>
                            <div className="card-body text-success">
                                <h5 className="card-title text-white">Atenção</h5>
                                <p className="card-text text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil est neque nesciunt iure! Quas, 
                                    facere laboriosam repudiandae est aliquid minus voluptatem iste exercitationem dignissimos dolor quibusdam natus 
                                    necessitatibus ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit autem soluta aspernatur nesciunt iste dolor aliquid, 
                                    est quaerat asperiores cumque esse eveniet ea. Facilis amet ipsam maiores quaerat vel modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Esse fugiat voluptates saepe! Voluptatibus similique doloribus, consequatur ipsum architecto voluptatum corrupti veniam debitis accusantium expedita 
                                    possimus sunt exercitationem, sint inventore enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint ducimus doloremque, molestiae eveniet,
                                    dolorem atque quae voluptatem aliquid, reprehenderit expedita. Culpa perspiciatis placeat odit? Perspiciatis autem repellendus error.
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nulla quae saepe! Neque iure aut;</li>
                                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio magnam nesciunt nam odit illo laborum;</li>
                                        <li>Fuga, vel quaerat exercitationem, ipsam sed sit quidem cum corrupti velit, ex laudantium magni rerum.</li>
                                    </ul>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur placeat cum voluptates ab neque, deserunt accusantium facere aliquid, consequuntur 
                                    dolore quis quia vitae architecto enim quidem nihil iure esse.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='cardFormContainer'>
                        <div id='cardForm' className='p-5 rounded-4 shadow-lg text-white'>
                            <h1 className='text-center mb-5 text-white text-uppercase fw-normal'>Preencha o formulário</h1>
                            {optionForm ? (
                                <div>
                                    <FormPartnerships />
                                </div>
                            ) : (
                                <div>
                                    <FormSolicitation />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </App>
        </>
    )
}
