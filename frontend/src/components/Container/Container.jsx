import React from 'react'

export default function Container({ children }) {
    return (
        <>
            <main style={{ paddingTop: '90px' }}>
                {children}
            </main>
        </>
    )
}   
