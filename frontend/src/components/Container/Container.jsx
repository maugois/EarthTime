import React from 'react'

export default function Container({ children }) {
    return (
        <>
            <main style={{ paddingTop: '120px' }}>
                {children}
            </main>
        </>
    )
}   
