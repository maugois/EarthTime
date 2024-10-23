import React from "react";
import './ModalLarge.css';

export default function ModalLarge({ children, ...props }) {
    return (
        <>
            <div class="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content modalLargeCustom">
                        <div class="modal-header customLargeClose">
                            <h1 class="modal-title fs-5 text-white">{props.titleModal}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            {children}
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}