import React from "react";
import { useState } from 'react';
import "./TextareaGeneral.css";

export default function TextareaGeneral(props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <>
            <div class="input-group mb-4">
                <span class={`iconLabel input-group-text ${isFocused ? 'focused' : ''}`}>{props.iconLabel}</span>
                <div className="form-floating">
                    <textarea class="textareaCustom form-control" placeholder={props.placeholder} id={props.idTextarea} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={{ height: '200px' }} required={props.isRequired}></textarea>
                    <label className="labelCustom" for={props.idTextarea}>{props.placeholder}</label>
                </div>
            </div>
        </>
    );
}