import React from 'react'
import Public from '../../layouts/Public.jsx'
import { Link } from "react-router-dom";
import InputGeneral from '../../components/InputGeneral/InputGeneral.jsx'
import BtnGeneral from '../../components/btnGeneral/BtnGeneral.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import './Login.css'

export default function Login() {
    return (
        <>
            <Public>
                <div id='login' className='d-flex justify-content-center align-items-center text-white' style={{ height: '100vh' }}>
                    <div className='cardMainMobile d-flex w-75 justify-content-center align-items-center h-75 shadow-lg rounded-3'>
                        <div className='cardMobile firstColumn w-50 h-100 d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='mb-5 fst-italic fw-light'>Seja bem-vindo</h1>

                            <div className='mt-4 mb-4'>
                                <Link to={"/"} className='nav-link  mt-4' id='logo'>
                                    Logo
                                </Link>
                            </div>

                            <p className='mb-5 fs-5 opacity-75 w-50 text-center'>Caso não tenha uma conta, solicita uma para o administrador!</p>
                        </div>
                        <div className='cardMobile secondColumn w-50 h-100 d-flex flex-column justify-content-center align-items-center'>
                            <h1 className='mb-5 fst-italic fw-light'>Faça seu login</h1>

                            <p className='mt-3 mb-4 fs-5 opacity-75'>Coloque seus dados de login</p>

                            <form className='w-75'>
                                <InputGeneral typeInput='text' idInput='user' iconLabel={ <FontAwesomeIcon icon={faUser} /> } placeholder='Usuário' isRequired='required' />
                                <InputGeneral typeInput='password' idInput='password' iconLabel={ <FontAwesomeIcon icon={faKey} /> } placeholder='Senha' isRequired='required' />

                                <div className='d-grid gap-2 col-6 mx-auto'>
                                    <BtnGeneral children={'Entrar'} color={'#2bac3e'} textColor={'white'}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Public>
        </>
    )
}
