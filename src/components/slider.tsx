import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../scss/componets/slider.scss';

interface Props {
    data: {
        images: string[];
    }
}

export default class SliderComponent extends React.Component<Props, any> {
	render() {
		const {
			images,
        } = this.props.data;
        
        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            variableHeight: true,
            pauseOnHover: false,
            centerPadding: '0',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }

		return (
            <section className="slider">
                <Slider {...settings}>
                    {images.map((image) => 
                        <div className="slider-item">
                            <img src={image} alt=""/>
                        </div>
                    )}
                </Slider>
            </section>
		);
	}
}