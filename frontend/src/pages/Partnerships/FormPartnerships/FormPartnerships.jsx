import React from "react";
import InputGeneral from "../../../components/InputGeneral/InputGeneral";
import InputUpload from "../../../components/InputUpload/InputUpload";
import TextareaGeneral from "../../../components/TextareaGeneral/TextareaGeneral";
import BtnGeneral from "../../../components/btnGeneral/BtnGeneral";
import ModalScroll from "../../../components/ModalScroll/ModalScroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faFile, faLocationDot, faBriefcase, faLink, faFont } from '@fortawesome/free-solid-svg-icons';
import './formPartnerships.css';

export default function FormPartnerships() {
    return (
        <>
            <form action="">
                <InputGeneral typeInput='text' idInput='name' iconLabel={ <FontAwesomeIcon icon={faUser} /> } placeholder='Nome' isRequired='required'/>
                <InputGeneral typeInput='email' idInput='email' iconLabel={ <FontAwesomeIcon icon={faEnvelope} /> } placeholder='E-mail' isRequired='required'/>
                <InputGeneral typeInput='text' idInput='phone' maskInput='(99) 99999-9999' iconLabel={ <FontAwesomeIcon icon={faPhone} /> } placeholder='Telefone' isRequired='required'/>
                <InputGeneral typeInput='text' idInput='cnpj' maskInput='99.999.999/9999-99' iconLabel={ <FontAwesomeIcon icon={faFile} /> } placeholder='CNPJ' isRequired='required'/>
                <InputGeneral typeInput='text' idInput='cep' maskInput='99999-999' iconLabel={ <FontAwesomeIcon icon={faLocationDot} /> } placeholder='CEP' isRequired='required'/>
                <InputGeneral typeInput='text' idInput='sector' iconLabel={ <FontAwesomeIcon icon={faBriefcase} /> } placeholder='Setor' isRequired='required'/>
                <InputGeneral typeInput='text' idInput='site' iconLabel={ <FontAwesomeIcon icon={faLink} /> } placeholder='Website' isRequired='required'/>
                <InputUpload idUpload='image' isRequired='required' />
                <TextareaGeneral idTextarea='description' iconLabel={ <FontAwesomeIcon icon={faFont} /> } placeholder='Descrição' isRequired='required' />
                
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="termsCheck" required/>
                        <label className="form-check-label text-white" htmlFor="termsCheck">
                            Li e concordo com os&nbsp; 
                        </label>
                        <span className="fw-bold cursor-pointer" data-bs-toggle="modal" data-bs-target="#termsModal">termos.</span>
                    </div>
                </div>

                <div className=" d-grid gap-2 col-6 ms-auto">
                    <BtnGeneral children={'Enviar'} color={'#2bac3e'} textColor={'white'} />
                </div>
            </form>

            <ModalScroll idModal='termsModal' titleModal='Termos'> 
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente harum, amet animi incidunt eligendi aperiam! Necessitatibus, eius. Id quo, neque incidunt quasi velit laboriosam voluptates hic ipsum explicabo atque?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut maiores omnis minima nesciunt modi sequi similique repellendus! Eum nobis, minima culpa consequuntur corrupti animi magni libero ratione necessitatibus, nostrum hic!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quos sint dolore laudantium perspiciatis eum beatae nulla tempore natus, magni modi eaque dolorum, vero, ea aliquam aut nobis. In, sunt?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint excepturi libero nisi et eaque. Recusandae doloremque quos, aspernatur alias dolorum laudantium aut pariatur eum quaerat quas ex voluptatum? In, at!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, veniam minus nobis ex facilis, maiores atque eveniet eius similique dolorum harum velit accusantium, alias molestiae sint consequatur in vel magnam!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed error quae iure nihil. Delectus quibusdam a voluptas consectetur nam rem quod commodi consequatur! Ad aspernatur ab praesentium incidunt obcaecati saepe!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis cupiditate earum reiciendis porro eveniet, maxime id cum! Quaerat dolore maiores obcaecati, autem ipsa vitae. Voluptates minus quo explicabo dolore exercitationem.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus quae, ex incidunt soluta inventore. Asperiores possimus fugiat ab, magni perspiciatis iusto adipisci praesentium tempora sunt? Necessitatibus optio at sit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium tempore incidunt placeat repellendus voluptate eligendi consequuntur quam eos animi maxime totam, numquam assumenda cum explicabo dolor voluptas deleniti ipsa!
                </p>
            </ModalScroll>
        </>
    );
}