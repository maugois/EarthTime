import React from "react";
import Slider from "react-slick";
import CardHorizontalCompanies from "../../../components/CardHorizontalCompanies/CardHorizontalCompanies.jsx";
import fetchCompanies from '../../../services/api/representativeData.jsx'

export default function SliderCardHorizontalCompanies( { handleOpenModal } ) {
    const settings = {
        lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    const { articles, loading } = fetchCompanies();

    const maxLength = 200;

    if (loading) {
        return (
            <>
                <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border text-white" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        );
    }
    
      return (
        <>
            <Slider {...settings}>
                { articles.map((article, index) => (
                    <CardHorizontalCompanies
                        key={index} 
                        idModalOpen='modalLargeCompanies'
                        branch={article.branch} 
                        title={article.title} 
                        imageUrl={article.imageUrl} 
                        backgroundCard={ index % 2 === 0 ? '#00428D' : '#2F847D' } 
                        idCardHorizontal='cardHorizontal'
                        handleClick={() => handleOpenModal(article)}
                    >
                        {article.description.substring(0, maxLength) + "..."}
                    </CardHorizontalCompanies>
                ))}
            </Slider>
        </>
    )
}