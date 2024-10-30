import React from "react";
import './ModalLarge.css';

export default function ModalLarge({ children, ...props }) {
    return (
        <>
            <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content modalLargeCustom">
                        <div className="modal-header customLargeClose">
                            <h1 className="modal-title fs-5 text-white">{props.titleModal}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            {children}
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}