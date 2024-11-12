import React from "react";
import "./MessageBox.css";

export default function MessageBox(props) {
    return (
        <div className={`toast align-items-center text-bg-${props.bgColor} border-0 position-relative top-0 end-0`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    {props.message}
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    );
}