import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "./InputUpload.css";

export default function InputUpload(props) {
    const [fileName, setFileName] = useState(""); // Estado para armazenar o nome do arquivo
    const [fileSelected, setFileSelected] = useState(false); // Estado para controlar a exibição do ícone
  
    // Função para capturar o nome do arquivo ao ser selecionado
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setFileName(file.name); // Atualiza o nome do arquivo
        setFileSelected(true); // Esconde o ícone e a palavra "Imagem"
      }
    };

    return (
        <>
            <input className="d-none" type="file" id={props.idUpload} required={props.isRequired} onChange={handleFileChange} />

            <div className="input-group input-group-lg mb-4">
                <label htmlFor={props.idUpload} className="form-control form-control-lg inputUpload d-flex flex-column justify-content-center align-items-center cursor-pointer">
                    {!fileSelected ? (
                        <>
                            <FontAwesomeIcon icon={faCloudArrowUp} size="2x" className="me-2 text-black" />
                            <span className="fw-light">Imagem</span>
                        </>
                    ) : (
                        <span className="fw-light">{fileName}</span> // Exibe o nome do arquivo
                    )}
                </label>


                <label htmlFor={props.idUpload} className="input-group-text inputUploadCustom btn btn-secondary fs-4 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faArrowUp} className="text-black" />
                </label>
            </div>
        </>
    );
}