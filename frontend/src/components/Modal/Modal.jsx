import React from "react";
import './Modal.css';

export default function Modal({ children, Buttons, ...props }) {
    return (
        <>
            <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content modalCustom">
                        <div className="modal-header customClose">
                            <h1 className="modal-title fs-5 text-white">{props.titleModal}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            {children}
                        </div>

                        <div className="modal-footer">
                            {Buttons}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}