import React from "react";
import Slider from "react-slick";
import CardHorizontal from "../../../components/CardHorizontalNews/CardHorizontalNews.jsx";
import FormatDate from "../../../components/FormatDate/FormatDate.jsx";
import fetchNews from '../../../services/api/fetchNews.jsx'

export default function SliderNews( { handleOpenModal } ) {
    const isWithinOneWeek = (dateString) => {
        const today = new Date();
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(today.getDate() - 21);
      
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
                { articles.filter((article) => isWithinOneWeek(article.publishedAt)).map((article, index) => (
                    <CardHorizontal 
                        key={index}
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