import React from "react";
import './CardAdmin.css';

export default function CardAdmin({ children, ...props }) {
    return (
        <div className="card text-bg-body mb-3" style={{width: "20rem", backgroundColor: "var(bs--gray-300) !important"}}>
            <div className="card-header pt-4">
                <h5 className="text-uppercase">
                    {props.title}
                </h5>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}