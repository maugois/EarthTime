import React from "react";
import { useState } from 'react';
import "./InputGeneral.css";
import InputMask from 'react-input-mask';

export default function InputGeneral(props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div class="input-group mb-4">
                <span class={`iconLabel input-group-text ${isFocused ? 'focused' : ''}`}>{props.iconLabel}</span>
                <div class="form-floating">
                    <InputMask type={props.typeInput} mask={props.maskInput} class="inputCustom form-control" id={props.idInput} placeholder={props.placeholder} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} required={props.isRequired} />
                    <label className="labelCustom" for={props.idInput}>{props.placeholder}</label>
                </div>
            </div>
        </>
    );
}