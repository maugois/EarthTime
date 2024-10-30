import React from "react";
import { useState } from 'react';
import "./InputSelect.css";

export default function InputGeneral(props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div className="input-group mb-4">
                <span className={`iconLabel input-group-text ${isFocused ? 'focused' : ''}`}>{props.iconLabel}</span>
                
                <div className="form-floating">    
                    <select className="selectCustom form-select" id={props.idSelect} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} required={props.isRequired}>
                        <option value="update">Alteração da parceria</option>
                        <option value="delete">Encerramento da parceria</option>
                    </select>
                    
                    <label className="labelCustom" for={props.idSelect}>{props.placeholder}</label>
                </div>
            </div>
        </>
    );
}