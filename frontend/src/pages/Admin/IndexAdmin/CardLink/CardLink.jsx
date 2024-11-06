import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faList, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./CardLink.css";

export default function CardLink( { children, ...props } ) {
    return (
        <>
            <div className="shadow mb-3" id="card-perfil" style={{ width: '340px', height: '16em' }}>
                <div className="card w-100 overflow-hidden d-flex align-items-center bg-gradient" style={{ height: '100%', backgroundColor: props.background }}>
                    <div className="card-body d-flex flex-column p-0 mt-4">
                        <FontAwesomeIcon icon={ props.icon } className="card-icon" />
                        <h5 className="card-title fs-4 text-uppercase card-texts ms-2 fw-semibold">{ props.title }</h5>
                        <p className="card-text card-texts w-75 ms-2 fw-medium">{ children }</p>
                        <Link to={ props.linkToPage } className="card-link text-white bg-info bg-gradient bg-opacity-25 shadow-lg position-absolute bottom-0 w-100 p-4 d-flex justify-content-between text-decoration-none" style={{ height: '70px' }}>
                            <span className="fs-5 d-flex align-items-center">Ver detalhes</span>
                            <FontAwesomeIcon icon={faArrowRight} className="icon-link fs-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}