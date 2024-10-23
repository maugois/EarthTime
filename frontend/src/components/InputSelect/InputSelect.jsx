import React from "react";
import { useState } from 'react';
import "./InputSelect.css";

export default function InputGeneral(props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div class="input-group mb-4">
                <span class={`iconLabel input-group-text ${isFocused ? 'focused' : ''}`}>{props.iconLabel}</span>
                
                <div class="form-floating">    
                    <select class="selectCustom form-select" id={props.idSelect} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} required={props.isRequired}>
                        <option value="update">Alteração da parceria</option>
                        <option value="delete">Encerramento da parceria</option>
                    </select>
                    
                    <label className="labelCustom" for={props.idSelect}>{props.placeholder}</label>
                </div>
            </div>
        </>
    );
}