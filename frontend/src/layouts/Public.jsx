import React from 'react';
import ContainerPublic from '../components/ContainerPublic/ContainerPublic.jsx';
import 'bootstrap/dist/css/bootstrap.css';

export default function Public({ children }) {
    return (
        <>
            <ContainerPublic>
                {children}
            </ContainerPublic>
        </>
    );
}