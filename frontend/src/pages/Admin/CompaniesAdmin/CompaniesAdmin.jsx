import React from "react";
import { useState } from "react";
import ReactDOMServer from 'react-dom/server';
import Admin from "../../../layouts/Admin.jsx";
import fetchCompanies from "../../../services/api/representativeData.jsx";
import CardAdmin from "../../../components/CardAdmin/CardAdmin.jsx";
import DataTable from "../../../components/DataTable/DataTable.jsx";
import ModalLarge from "../../../components/ModalLarge/ModalLarge.jsx";
import InputGeneral from "../../../components/InputGeneral/InputGeneral.jsx";
import InputUpload from "../../../components/InputUpload/InputUpload.jsx";
import TextareaGeneral from "../../../components/TextareaGeneral/TextareaGeneral.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faFile, faLocationDot, faBriefcase, faLink, faFont } from '@fortawesome/free-solid-svg-icons';
import "./CompaniesAdmin.css";
import Modal from "../../../components/Modal/Modal.jsx";

export default function CompaniesAdmin() {
    const { articles } = fetchCompanies();
    const [statusFilter, setStatusFilter] = useState("1");
    const [selectedArticle, setSelectedArticle] = useState({});
   
    const handleOpenModal = (article) => {
        console.log(article);
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

    const dataTable = filteredArticlesCompanies.map((article) => [
        article.id,
        article.title,
        article.branch,
        ReactDOMServer.renderToString(
            <a href={article.urlCompany} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{article.urlCompany}</a>
        ),
        ReactDOMServer.renderToString(
            <span className={`badge opacity-75 px-4 py-2 ${article.status === "Aceito" ? "bg-success" : article.status === "Pendente" ? "bg-warning" : "bg-danger"}`}>
                {article.status}
            </span>
        ),
        ReactDOMServer.renderToString(
            <div className="d-flex gap-3 justify-content-center">
                <button 
                    className="btn btn-success" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modalCompaniesView" 
                    onClick={console.log(article)}>
                    Visualizar
                </button>

                <button 
                    className="btn btn-warning" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modalLargeCompaniesUpdate" 
                    onClick={console.log(article)}>
                    Alterar
                </button>

                <button 
                    className="btn btn-danger" 
                    data-bs-toggle="modal" 
                    data-bs-target="#modalCompaniesDelete" 
                    onClick={console.log(article)}>
                    Excluir
                </button>
            </div>
        )
    ]);

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
                    <DataTable idTable="tableSolicitation" dataTable={dataTable}>
                        <th className="text-center">Id</th>
                        <th className="text-center">Nome</th>
                        <th className="text-center">Setor</th>
                        <th className="text-center">Website</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Opções</th>
                    </DataTable>
                </div>
            </div>

            <Modal idModal="modalCompaniesView" titleModal="Visualizar"                
                Buttons={
                    <>
                        <button type="button" className="btn btn-" data-bs-toggle="modal" data-bs-target={"#modalLargeCompaniesUpdate"} data-bs-dismiss="modal">Alterar/Encerrar</button>
                    </>
                }
            >
                <div className="row text-white m-auto">
                    <InputGeneral typeInput='text' idInput='solicitation' iconLabel={ <FontAwesomeIcon icon={faLink} /> } placeholder='Tipo de solicitação' isRequired='required'/>
                    <TextareaGeneral idTextarea='reason' iconLabel={ <FontAwesomeIcon icon={faFont} /> } placeholder='Motivo' isRequired='required' />
                </div>
            </Modal>

            <ModalLarge idModal="modalLargeCompaniesUpdate" titleModal="Alterar" 
                Buttons={
                    <>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Alterar</button>
                    </>
                }
            > 
                <div className='row text-white m-auto'>
                    <div className='col-6'>
                        <form action="">
                            <InputGeneral typeInput='text' idInput='name' iconLabel={ <FontAwesomeIcon icon={faUser} /> } placeholder='Nome' isRequired='required' value={selectedArticle.title}/>
                            <InputGeneral typeInput='email' idInput='email' iconLabel={ <FontAwesomeIcon icon={faEnvelope} /> } placeholder='E-mail' isRequired='required' value={selectedArticle.email}/>
                            <InputGeneral typeInput='text' idInput='phone' maskInput='(99) 99999-9999' iconLabel={ <FontAwesomeIcon icon={faPhone} /> } placeholder='Telefone' isRequired='required' value={selectedArticle.phone}/>
                            <InputGeneral typeInput='text' idInput='cnpj' maskInput='99.999.999/9999-99' iconLabel={ <FontAwesomeIcon icon={faFile} /> } placeholder='CNPJ' isRequired='required' value={selectedArticle.cnpj}/>
                            <InputGeneral typeInput='text' idInput='cep' maskInput='99999-999' iconLabel={ <FontAwesomeIcon icon={faLocationDot} /> } placeholder='CEP' isRequired='required' value={selectedArticle.cep}/>
                            <InputGeneral typeInput='text' idInput='sector' iconLabel={ <FontAwesomeIcon icon={faBriefcase} /> } placeholder='Setor' isRequired='required' value={selectedArticle.branch}/>
                        </form>
                    </div>
                    <div className='col-6'>
                        <form action="">
                            <InputGeneral typeInput='text' idInput='site' iconLabel={ <FontAwesomeIcon icon={faLink} /> } placeholder='Website' isRequired='required' value={selectedArticle.urlCompany}/>
                            <InputUpload idUpload='image' isRequired='required' />
                            <TextareaGeneral idTextarea='description' iconLabel={ <FontAwesomeIcon icon={faFont} /> } placeholder='Descrição' isRequired='required' height='274px' value={selectedArticle.description} />
                        </form>
                    </div>
                </div>
            </ModalLarge>

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