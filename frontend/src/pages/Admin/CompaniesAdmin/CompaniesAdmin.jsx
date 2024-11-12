import React from "react";
import { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import Admin from "../../../layouts/Admin.jsx";
import fetchCompanies from "../../../services/api/representativeData.jsx";
import CardAdmin from "../../../components/CardAdmin/CardAdmin.jsx";
import DataTable from "../../../components/DataTable/DataTable.jsx";
import InputGeneral from "../../../components/InputGeneral/InputGeneral.jsx";
import TextareaGeneral from "../../../components/TextareaGeneral/TextareaGeneral.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faFile, faLocationDot, faBriefcase, faLink, faFont, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./CompaniesAdmin.css";
import Modal from "../../../components/Modal/Modal.jsx";

export default function CompaniesAdmin() {
    const { articles } = fetchCompanies();
    const [statusFilter, setStatusFilter] = useState("1");
    const [selectedArticle, setSelectedArticle] = useState({});
    const [selectedField, setSelectedField] = useState('');
   
    const handleOpenModal = (article) => {
        setSelectedArticle(article);
    };

    const filteredArticlesCompanies = articles.filter((article) => {
        if (statusFilter === "1") return article.status === "Aceito";
        if (statusFilter === "2") return article.status === "Aceito" && article.solicitation === "Alterar" || article.solicitation === "Encerrar";
        if (statusFilter === "3") return article.status === "Aceito" && article.solicitation === "0";
        return true;
    });

    const filteredArticlesSolicitations = articles.filter((article) => {
        return article.status === "Aceito" && article.solicitation === "Alterar" || article.solicitation === "Encerrar";
    });

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
            width: '100px'
        },
        {
            name: 'Nome',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Setor',
            selector: row => row.branch,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
            width: '200px'
        },
        {
            name: 'Opções',
            selector: row => row.button,
            width: '300px'
        },
    ];

    const dataTable = filteredArticlesCompanies.map((article) => ({
        id: article.id,
        title: article.title,
        branch: article.branch,
        status: (
            <span className={`badge opacity-75 px-4 py-2 ${article.status === "Aceito" ? "bg-success" : article.status === "Pendente" ? "bg-warning" : "bg-danger"}`}>
                {article.status}
            </span>
        ),
        button: (
            <div className="d-flex gap-3 justify-content-center">
            {
                article.solicitation === "Alterar" || article.solicitation === "Encerrar" ? (
                    <>
                        <button 
                            className="btn btn-success" 
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCompaniesView" 
                            onClick={() => handleOpenModal(article)}>
                            Visualizar
                        </button>
                        <button 
                            className="btn btn-warning" 
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCompaniesUpdate" 
                            onClick={() => handleOpenModal(article)}>
                            Alterar
                        </button>

                        <button 
                            className="btn btn-danger" 
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCompaniesDelete" 
                            onClick={() => handleOpenModal(article)}>
                            Excluir
                        </button>
                    </>
                    
                ) : (
                    <>
                        <button 
                            className="btn btn-warning" 
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCompaniesUpdate" 
                            onClick={() => handleOpenModal(article)}>
                            Alterar
                        </button>
                    
                        <button 
                            className="btn btn-danger" 
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCompaniesDelete" 
                            onClick={() => handleOpenModal(article)}>
                            Encerrar
                        </button>
                    </>
                ) 
            }
        </div>
        ),
    }));

    return (
        <Admin>
            <div className="sectionAdminSolicitation">
                <h1 className="text-uppercase ms-5 mb-5 text-white">Empresas</h1>
                <div className="d-flex flex-wrap justify-content-center gap-5 mb-5 text-white">
                    <CardAdmin title="Filtrar">
                        <select className="form-select form-select-lg my-3" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                            <option value="1">Todos</option>
                            <option value="2">Com solicitações</option>
                            <option value="3">Sem solicitações</option>
                        </select>
                    </CardAdmin>

                    <CardAdmin title="Total de solicitações">
                        <div className="fs-1 fw-semibold text-center py-3">{filteredArticlesSolicitations.length}</div>
                    </CardAdmin>

                    <CardAdmin title="Total de empresas">
                        <div className="fs-1 fw-semibold text-center py-3">{filteredArticlesCompanies.length}</div>
                    </CardAdmin>
                </div>

                <div className="table-responsive mx-5 p-4 bg-body rounded shadow-lg">
                    <DataTable idTable="tableSolicitation" dataTable={dataTable} columns={columns} /> 
                </div>
            </div>

            <Modal idModal="modalCompaniesView" titleModal="Visualizar"                
                Buttons={
                    <>
                        <button type="button" className={`btn btn-${selectedArticle.solicitation === "Alterar" ? "warning" : "danger"}`}data-bs-toggle="modal" data-bs-target={`#modal${selectedArticle.solicitation === "Alterar" ? "LargeCompaniesUpdate" : "CompaniesDelete"}`} data-bs-dismiss="modal">{selectedArticle.solicitation === "Alterar" ? "Alterar" : "Encerrar"}</button>
                    </>
                }
            >
                <div className="row text-white m-auto">
                    <InputGeneral typeInput='text' idInput='solicitation' iconLabel={ <FontAwesomeIcon icon={faLink} /> } placeholder='Tipo de solicitação' value={selectedArticle.solicitation} isRequired='required'/>
                    <TextareaGeneral idTextarea='reason' iconLabel={ <FontAwesomeIcon icon={faFont} /> } placeholder='Motivo' value={selectedArticle.reason} isRequired='required' />
                </div>
            </Modal>

            <Modal idModal="modalCompaniesUpdate" titleModal="Alterar" 
                Buttons={
                    <>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                    </>
                }
            > 
                <div className='row text-white m-auto'>
                    <div className='col-12'>
                        <ul className="list-group list-group-flush listGroupCustom rounded w-100">
                            <li className="list-group-item d-flex justify-content-between">
                                Nome: {selectedArticle.title} 
                                <button onClick={() => setSelectedField('title')} type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                Setor: {selectedArticle.branch} 
                                <button onClick={() => setSelectedField('branch')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                Descrição: {selectedArticle.description ? (selectedArticle.description.length > 30 ? selectedArticle.description.substring(0, 30) + "..." : selectedArticle.description) : "No description available"} 
                                <button onClick={() => setSelectedField('description')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                E-mail: {selectedArticle.email} 
                                <button onClick={() => setSelectedField('email')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                Telefone: {selectedArticle.phone} 
                                <button onClick={() => setSelectedField('phone')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                CNPJ: {selectedArticle.cnpj} 
                                <button onClick={() => setSelectedField('cnpj')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                CEP: {selectedArticle.cep} 
                                <button onClick={() => setSelectedField('cep')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                Link: {selectedArticle.urlCompany} 
                                <button onClick={() => setSelectedField('urlCompany')} className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdateForm"> <FontAwesomeIcon icon={faPenToSquare} /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Modal>

            <Modal idModal="modalCompaniesUpdateForm" titleModal="Alterar"                
                Buttons={
                    <>
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalCompaniesUpdate" >Voltar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Alterar</button>
                    </>
                }>
                <div className='row text-white m-auto'>
                    <div className='col-12'>
                        <form>
                            {selectedField === 'title' && <InputGeneral typeInput='text' idInput='titleUpdate' iconLabel={ <FontAwesomeIcon icon={faUser} /> } placeholder='Nome' isRequired='required' />}
                            {selectedField === 'branch' && <InputGeneral typeInput='text' idInput='branchUpdate' iconLabel={ <FontAwesomeIcon icon={faBriefcase} /> } placeholder='Setor' isRequired='required' />}
                            {selectedField === 'description' && <TextareaGeneral idTextarea='descriptionUpdate' iconLabel={ <FontAwesomeIcon icon={faFont} /> } placeholder='Descrição' isRequired='required' height='274px' />}
                            {selectedField === 'email' && <InputGeneral typeInput='email' idInput='emailUpdate' iconLabel={ <FontAwesomeIcon icon={faEnvelope} /> } placeholder='E-mail' isRequired='required' />}
                            {selectedField === 'phone' && <InputGeneral typeInput='text' idInput='phoneUpdate' iconLabel={ <FontAwesomeIcon icon={faPhone} /> } placeholder='Telefone' isRequired='required' />}
                            {selectedField === 'cnpj' && <InputGeneral typeInput='text' idInput='cnpjUpdate' iconLabel={ <FontAwesomeIcon icon={faFile} /> } placeholder='CNPJ' isRequired='required' />}
                            {selectedField === 'cep' && <InputGeneral typeInput='text' idInput='cepUpdate' iconLabel={ <FontAwesomeIcon icon={faLocationDot} /> } placeholder='CEP' isRequired='required' />}
                            {selectedField === 'urlCompany' && <InputGeneral typeInput='text' idInput='siteUpdate' iconLabel={ <FontAwesomeIcon icon={faLink} /> } placeholder='Website' isRequired='required' />}
                        </form>
                    </div>
                </div>
            </Modal>

            <Modal idModal="modalCompaniesDelete" titleModal="Deletar"
                Buttons={
                    <>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Encerrar</button>
                    </>
                }
            >
                <p className="text-center text-white fs-5 pt-5 pb-4">Realmente deseja encerrar a parceria?</p>
            </Modal>
        </Admin>
    );
}