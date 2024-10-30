import React from "react";
import Slider from "react-slick";
import CardVerticalCompanies from '../../../components/CardVerticalCompanies/CardVerticalCompanies.jsx'
import fetchCompanies from '../../../services/api/representativeData.jsx'

export default function SliderCardVerticalNews( { handleOpenModal } ) {
    const settings = {
        lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
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
                    <CardVerticalCompanies
                        key={index} 
                        idModalOpen='modalLargeCompanies' 
                        branch={article.branch}
                        title={article.title} 
                        imageUrl={article.imageUrl} 
                        backgroundCard={index % 2 === 0 ? '#2F847D' : '#00428D'}
                        handleClick={() => handleOpenModal(article)}
                    >
                        {article.description.substring(0, maxLength) + "..."}
                    </CardVerticalCompanies>
                )) }
            </Slider>
        </>
    )
}