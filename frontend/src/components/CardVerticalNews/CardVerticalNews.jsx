import React from "react";
import './CardVerticalNews.css';

export default function CardVerticalNews( { children, handleClick, ...props } ) {
    return (
        <>
            <div className="card mt-5 mx-auto shadow cardVerticalCustom" style={{maxWidth: "30rem", backgroundColor: props.backgroundCard}}>
                <img src={props.imageUrl} className="card-img-top" style={{width: "478px" }} alt={props.imageAlt} />
                <div className="card-body">
                    <span className="badge rounded-pill bg-danger py-1 px-4 my-3 text-uppercase">Atenção</span>
                    <h5 className="card-title">{ props.title }</h5>
                    <p className="card-text mb-4 opacity-75">{ children }</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text d-flex flex-column">
                            { props.author }
                            <small className="opacity-75">{ props.date }</small>
                        </p>

                        <div className="me-3">
                            <button 
                                id={props.idCardVertical} 
                                type="button" 
                                className="btn btn btn-outline-light" 
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