import React from 'react';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import Container from '../components/Container/Container';
import 'bootstrap/dist/css/bootstrap.css';

export default function Admin({ children }) {
    return (
        <>
            <HeaderAdmin />
            <Container>
                {children}
            </Container>
        </>
    );
}