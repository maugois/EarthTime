import React from "react";
import './CardVerticalCompanies.css';

export default function CardVerticalCompanies( { children, handleClick, ...props } ) {
    return (
        <>
            <div className="card mt-5 mx-auto shadow cardVerticalCustom" style={{maxWidth: "30rem", backgroundColor: props.backgroundCard}}>
                <img src={props.imageUrl} className="card-img-top" style={{width: "100%" }} alt={props.imageAlt} />
                <div className="card-body">
                    <h5 className="card-title">{ props.title }</h5>
                    <span className="badge rounded-pill bg-danger py-2 px-4 mb-4 mt-2 text-uppercase">{ props.branch }</span>
                    <p className="card-text mb-4 opacity-75">{ children }</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="w-100 mt-4">
                            <button 
                                id={props.idCardVertical} 
                                type="button" 
                                className="btn btn btn-outline-light w-100" 
                                data-bs-toggle="modal" 
                                data-bs-target={`#${props.idModalOpen}`}
                                onClick={handleClick}
                            >
                                Ver mais...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}