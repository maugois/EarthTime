import React from "react";
import { useState, useEffect } from "react";
import ReactDOMServer from 'react-dom/server';
import Admin from "../../../layouts/Admin.jsx";
import fetchCompanies from '../../../services/api/representativeData.jsx';
import CardAdmin from "../../../components/CardAdmin/CardAdmin.jsx";
import DataTable from "../../../components/DataTable/DataTable.jsx";
import ModalLarge from "../../../components/ModalLarge/ModalLarge.jsx";
import InputGeneral from "../../../components/InputGeneral/InputGeneral.jsx";
import LabelTitle from "../../../components/LabelTitle/LabelTitle.jsx";
import InputUpload from "../../../components/InputUpload/InputUpload.jsx";
import TextareaGeneral from "../../../components/TextareaGeneral/TextareaGeneral.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faFile, faLocationDot, faBriefcase, faLink, faFont } from '@fortawesome/free-solid-svg-icons';
import './SolicitationAdmin.css';

export default function SolicitationAdmin() {
    const { articles } = fetchCompanies();
    const [statusFilter, setStatusFilter] = useState("1");
    const [selectedArticle, setSelectedArticle] = useState({});

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        isAtTop: window.scrollY === 0,
    });

    useEffect(() => {
        const handleResizeAndScroll = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                isAtTop: window.scrollY === 0,
            });
        };
    
        // Adiciona event listeners para 'resize' e 'scroll'
        window.addEventListener('resize', handleResizeAndScroll);
        window.addEventListener('scroll', handleResizeAndScroll);

        // Remove os event listeners ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResizeAndScroll);
            window.removeEventListener('scroll', handleResizeAndScroll);
        };
    }, []);
    
    const isMobile = windowSize.width <= 990;
   
    const handleOpenModal = (article) => {
        setSelectedArticle(article);
    };

    const filteredArticles = articles.filter((article) => {
        if (statusFilter === "1") return true; // "Todos" selecionado
        if (statusFilter === "2") return article.status === "Aceito";
        if (statusFilter === "3") return article.status === "Pendente";
        if (statusFilter === "4") return article.status === "Recusado";
        return true;
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

    const dataTable = filteredArticles.map((article) => ({
        id: article.id,
        title: article.title,
        branch: article.branch,
        status: (
            <span className={`badge opacity-75 px-4 py-2 ${article.status === "Aceito" ? "bg-success" : article.status === "Pendente" ? "bg-warning" : "bg-danger"}`}>
                {article.status}
            </span>
        ),
        button: (
            <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#modalLargeSolicitationAdmin"
                onClick={() => handleOpenModal(article)}
            >
                Visualizar
            </button>
        ),
    }));

    return (
        <Admin>
            <div className="sectionAdminSolicitation">
                <h1 className="text-uppercase ms-5 mb-5 text-white">Solicitações</h1>
                <div className="d-flex flex-wrap justify-content-center gap-5 mb-5 text-white">
                    <CardAdmin title="Filtrar">
                        <select className="form-select form-select-lg my-3" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                            <option value="1">Todos</option>
                            <option value="2">Aceito</option>
                            <option value="3">Pendente</option>
                            <option value="4">Recusado</option>
                        </select>
                    </CardAdmin>

                    <CardAdmin title="Total de solicitações">
                        <div className="fs-1 fw-semibold text-center py-3">{filteredArticles.length}</div>
                    </CardAdmin>
                </div>

                <div className="table-responsive mx-5 p-4 bg-body rounded shadow-lg">
                    <DataTable idTable="tableSolicitation" dataTable={dataTable} columns={columns} />
                </div>
            </div>

            <ModalLarge idModal="modalLargeSolicitationAdmin" titleModal="Solicitação" 
                Buttons={
                    <>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Recusar</button>
                        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Aceitar</button>
                    </>
                }
            > 
                <div className='row text-white m-auto'>
                    <div className={isMobile ? 'col-12' : 'col-7'}>
                        <span className="badge rounded-pill bg-danger py-2 px-4 mb-4 mt-2 text-uppercase">{selectedArticle.branch}</span>
                        <h2>{selectedArticle.title}</h2>
                        <p className='my-4 opacity-75'>{selectedArticle.description}</p>
                        <ul className="list-group list-group-flush listGroupCustom rounded w-50">
                            <li className="list-group-item"><FontAwesomeIcon icon={faEnvelope} /> {selectedArticle.email}</li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faPhone} /> {selectedArticle.phone}</li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faFile} /> {selectedArticle.cnpj}</li>
                            <li className="list-group-item"><FontAwesomeIcon icon={faLocationDot} /> {selectedArticle.cep}</li>
                        </ul>
                        <p className='my-3'>
                            Link: <a href={selectedArticle.urlCompany} target="_blank" className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover'>{selectedArticle.urlCompany}</a>
                        </p>
                    </div>
                    <div className={isMobile ? 'col-12' : 'col-5'} style={{ height: '525px' }}>
                        <img src={selectedArticle.imageUrl} className="img-fluid rounded object-fit-cover h-100 w-100" alt={selectedArticle.title} />
                    </div>
                </div>
            </ModalLarge>
        </Admin>
    );
}