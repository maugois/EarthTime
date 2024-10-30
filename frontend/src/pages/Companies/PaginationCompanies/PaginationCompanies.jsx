import React, { useState } from "react";
import CardVerticalCompanies from '../../../components/CardVerticalCompanies/CardVerticalCompanies.jsx';
import fetchCompanies from '../../../services/api/representativeData.jsx';
import "./PaginationCompanies.css";

export default function PaginationCompanies({ handleOpenModal }) {
    const { articles, loading } = fetchCompanies();
    const [currentPage, setCurrentPage] = useState(1);
    
    const itemsPerPage = 4;
    const totalPages = Math.ceil(articles.length / itemsPerPage);
    const maxLength = 150;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getItemsForCurrentPage = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return articles.slice(startIndex, endIndex);
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    
    return (
        <>
            <div className="container d-flex flex-wrap">
                {getItemsForCurrentPage().map((article, index) => (
                        <CardVerticalCompanies
                            key={index} 
                            idModalOpen='modalLargeCompanies' 
                            title={article.title}
                            branch={article.branch} 
                            imageUrl={article.imageUrl} 
                            backgroundCard={index % 2 === 0 ? '#2F847D' : '#00428D'}
                            handleClick={() => handleOpenModal(article)}
                        >
                            {article.description.substring(0, maxLength) + "..."}
                        </CardVerticalCompanies>
                ))}
            </div>

            <nav className="my-5 navPaginationCustom" data-bs-theme="dark">
                <ul className="pagination justify-content-center paginationCustom">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''} shadow`}>
                        <button 
                            className="page-link" 
                            onClick={() => handlePageChange(currentPage - 1)} 
                            aria-label="Previous"
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''} shadow`}>
                            <button 
                                className="page-link" 
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''} shadow`}>
                        <button 
                            className="page-link" 
                            onClick={() => handlePageChange(currentPage + 1)} 
                            aria-label="Next"
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
