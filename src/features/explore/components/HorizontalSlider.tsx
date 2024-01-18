import { slideData } from '@/constants/explore/slideData';
import { FC, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SliderArrow from './SliderArrow';

const HorizontalSlider: FC = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],

        prevArrow: <SliderArrow direction="left" />,
        nextArrow: <SliderArrow direction="right" />,
    };

    return (
        <div>
            <Slider {...settings} ref={sliderRef} className="slider-container">
                {slideData.map((slide) => (
                    <div key={slide.key} className="slider-item">
                        <slide.icon />
                        <span>{slide.content}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HorizontalSlider;
