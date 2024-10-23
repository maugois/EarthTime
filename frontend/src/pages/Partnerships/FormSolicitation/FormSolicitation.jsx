import React from "react";
import InputSelect from "../../../components/InputSelect/InputSelect";
import TextareaGeneral from "../../../components/TextareaGeneral/TextareaGeneral";
import BtnGeneral from "../../../components/btnGeneral/BtnGeneral";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faList } from '@fortawesome/free-solid-svg-icons';

export default function FormSolicitation() {
    return (
        <>
            <form action="">
                <InputSelect idSelect='typeSolicitation' iconLabel={ <FontAwesomeIcon icon={faList} /> } placeholder='Informa o tipo de solicitação' isRequired='required'/>
                <TextareaGeneral idTextarea='description' iconLabel={ <FontAwesomeIcon icon={faFont} /> } placeholder='Informe a alteração que deve ser feita ou o motivo do encerramento da parceria' isRequired='required' />

                <div className="d-grid gap-2 col-6 ms-auto">
                    <BtnGeneral children={'Enviar'} color={'#2bac3e'} textColor={'white'} />
                </div>
            </form>
        </>
    );
}