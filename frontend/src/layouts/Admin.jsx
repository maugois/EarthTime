import React from 'react';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import ContainerPublic from '../components/ContainerPublic/ContainerPublic';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

export default function Admin({ children }) {
    return (
        <>
            <HeaderAdmin />
            <ContainerPublic>
                {children}
            </ContainerPublic >
        </>
    );
}