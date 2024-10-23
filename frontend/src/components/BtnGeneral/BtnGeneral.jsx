import React from "react";
import './BtnGeneral.css'

export default function BtnGeneral(props) {
    return (
        <>
            <input type="submit" value={props.children} className="btnCustom btn btn-lg shadow" style={{ backgroundColor: props.color, color: props.textColor, border: 'none' }}/>
        </>
    );
}