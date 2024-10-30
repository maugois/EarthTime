import React from 'react'
import './Card.css'

export default function Card({ title, children }) {
    return (
        <>
            <div className="card mb-4 p-3 shadow cardCustom" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center fs-3">{title}</h5>
                    <p className="card-text">{children}</p>
                </div>
            </div>
        </>
    )
}