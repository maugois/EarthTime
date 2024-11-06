import React from 'react';
import ContainerPublic from '../components/ContainerPublic/ContainerPublic.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

export default function Public({ children }) {
    return (
        <>
            <ContainerPublic>
                {children}
            </ContainerPublic>
        </>
    );
}