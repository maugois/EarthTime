import React from 'react'
import './Card.css'

export default function Card({ title, children }) {
    return (
        <>
            <div class="card mb-4 p-3 shadow cardCustom" style={{ width: '18rem' }}>
                <div class="card-body">
                    <h5 class="card-title text-center fs-3">{title}</h5>
                    <p class="card-text">{children}</p>
                </div>
            </div>
        </>
    )
}