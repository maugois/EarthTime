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
                    <div id='cardOptionsContainer'>
                        <div id='cardOptions' class="list-group shadow-lg">
                            <a href="#" id='optionPartnerships' className="list-group-item list-group-item-action text-center text-uuppercase fs-5" onClick={() => clickOnOption(true)}>Parceria</a>
                            <a href="#" className="list-group-item list-group-item-action text-center text-uuppercase fs-5" onClick={() => clickOnOption(false)}>Solicitação</a>
                        </div>
                    </div>

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
            </App>
        </>
    )
}
