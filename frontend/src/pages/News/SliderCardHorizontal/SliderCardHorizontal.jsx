import React from "react";
import Slider from "react-slick";
import CardHorizontal from "../../../components/CardHorizontal/CardHorizontal.jsx";
import FormatDate from "../../../components/FormatDate/FormatDate.jsx";
import fetchNews from '../../../services/api/fetchNews.jsx'

export default function SliderCardVertical( { handleOpenModal } ) {
    const isWithinOneWeek = (dateString) => {
        const today = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(today.getDate() - 7);
      
        const articleDate = new Date(dateString);
        return articleDate >= oneWeekAgo && articleDate <= today;
    };

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
                { articles.filter((article) => isWithinOneWeek(article.publishedAt)).map((article, index) => (
                    <CardHorizontal 
                        idModalOpen='modalLargeNews' 
                        title={article.title} 
                        author={article.author} 
                        date={FormatDate(article.publishedAt)} 
                        imageUrl={article.urlToImage} 
                        backgroundCard={ index % 2 === 0 ? '#00428D' : '#2F847D' } 
                        idCardHorizontal='cardHorizontal'
                        handleClick={() => handleOpenModal(article)}
                    >
                        {article.description.substring(0, maxLength) + "..."}
                    </CardHorizontal>
                ))}
            </Slider>
        </>
    )
}