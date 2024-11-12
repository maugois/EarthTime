import React from "react";
import { useState } from 'react';
import "./InputGeneral.css";
import InputMask from 'react-input-mask';

export default function InputGeneral(props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div className="input-group mb-4">
                <span className={`iconLabel input-group-text ${isFocused ? 'focused' : ''}`}>{props.iconLabel}</span>
                <div className="form-floating">
                    <InputMask 
                        type={props.typeInput} 
                        mask={props.maskInput} 
                        className="inputCustom form-control" 
                        id={props.idInput} 
                        placeholder={props.placeholder} 
                        onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} 
                        required={props.isRequired} 
                        value={props.value}
                        onChange={props.onChange}
                        />
                    <label className="labelCustom" htmlFor={props.idInput}>{props.placeholder}</label>
                </div>
            </div>
        </>
    );
}