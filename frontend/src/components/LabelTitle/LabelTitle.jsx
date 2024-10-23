import React from 'react'
import './LabelTitle.css'

export default function LabelTitle({ children, ...props }) {
    return (
        <>
            <div className="labelTitle" style={{backgroundColor: props.bgColor}}>
                <h1>
                    {children}
                </h1>
            </div>
        </>
    )
}