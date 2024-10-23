import React from "react";
import Slider from "react-slick";
import CardVertical from '../../../components/CardVertical/CardVertical.jsx'
import FormatDate from '../../../components/FormatDate/FormatDate.jsx'
import fetchNews from '../../../services/api/fetchNews.jsx'

export default function SliderCardVertical( { handleOpenModal } ) {
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

    const { articles, loading } = fetchNews();
    console.log(articles);

    const maxLength = 150;

    if (loading) {
        return (
            <>
                <div class="d-flex justify-content-center my-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </>
        );
    }
    
    return (
        <>
            <Slider {...settings}>
                { articles.map((article, index) => (
                    <CardVertical 
                        idModalOpen='modalLargeNews' 
                        title={article.title} 
                        author={article.author} 
                        date={FormatDate(article.publishedAt)} 
                        imageUrl={article.urlToImage} 
                        backgroundCard={ index % 2 === 0 ? '#2F847D' : '#00428D' }
                        handleClick={() => handleOpenModal(article)}
                    >
                        {article.description.substring(0, maxLength) + "..."}
                    </CardVertical>
                )) }
            </Slider>
        </>
    )
}