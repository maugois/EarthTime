import React from "react";
import { useState } from 'react';
import "./InputSelect.css";

export default function InputGeneral({ children, ...props}) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div className="input-group mb-4">
                <span className={`iconLabel input-group-text ${isFocused ? 'focused' : ''}`}>{props.iconLabel}</span>
                
                <div className="form-floating">    
                    <select className="selectCustom form-select" id={props.idSelect} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} required={props.isRequired} onChange={props.onChange}>
                        {children}
                    </select>
                    
                    <label className="labelCustom" htmlFor={props.idSelect}>{props.placeholder}</label>
                </div>
            </div>
        </>
    );
}