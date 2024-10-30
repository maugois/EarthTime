import React from "react";
import './CardRs.css'

export default function CardRs({ children, ...props }) {
    return (
        <>
            <div className="cardRs text-white text-center shadow fs-4" style={{ borderColor: props.borderColor }}>
                { children }
            </div>
        </>
    )
}