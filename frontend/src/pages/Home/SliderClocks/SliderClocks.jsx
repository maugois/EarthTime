import React from "react";
import Clock from "../../../components/Clock/Clock";
import Slider from "react-slick";

export default function SliderClocks() {
    const settings = {
        fade: true,
        lazyLoad: true,
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };

    const targetDates = {
        animals: new Date('2035-01-01'),
        forest: new Date('2050-01-01'),
        minerals: new Date('2100-01-01')
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <p className="text-end text-white text-uppercase fs-5 mb-4">Animais</p>
                    <Clock resource="animals" targetDate={targetDates.animals} />
                </div>

                <div>
                    <p className="text-end text-white text-uppercase fs-5 mb-4">Floresta</p>
                    <Clock resource="forest" targetDate={targetDates.forest} />
                </div>

                <div>
                    <p className="text-end text-white text-uppercase fs-5 mb-4">Minerais</p>
                    <Clock resource="minerals" targetDate={targetDates.minerals} />
                </div>
            </Slider>
        </>
    )
}