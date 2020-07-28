import React from 'react';
// import SliderComponent from '../components/slider';
// import InfoCardSliderComponent from '../components/sliderInfoCard';
import Slider from "react-slick";
import './../scss/componets/infoCard.scss';

interface Props {
	data: {
		title: string;
		description: string;
		buttonText: string;
		img: string;
		alt: string;
		direction: string;
		colorName: string;
		link ? : string;
		images: string[];
		scrollToSection ? : () => void;
	};
}

export default class InfoCardSliderComponent extends React.Component<Props, any> {
	render() {
		const {
			alt,
			buttonText,
			colorName, //--blue, --red, --green
			description,
			direction, //--left
			img,
			title,
			link,
			images,
			scrollToSection,
		} = this.props.data;

		const settings = {
            dots: false,
            infinite: true,
            // fade: true,
            arrows: false,
			autoplay: true,
			centerMode: true,
            speed: 2000,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            centerPadding: '0',
			// variableWidth: true,
			responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerPadding: '0',
                    }
                }
            ]
		}

		return (
			<section className={'infoCard'}>
				<div className={`infoCard__box infoCard__box${direction}`}>
					<div className={'infoCard__box__textHolder'}>
						<h2 className={'infoCard__box__textHolder__title'}>
							{title}
						</h2>
						<span
							className={`infoCard__box__textHolder__line infoCard__box__textHolder__line${colorName}`}
						/>
						<p className={'infoCard__box__textHolder__description'}>
							{description}
						</p>
						<button className={`infoCard__box__textHolder__button infoCard__box__textHolder__button${colorName}`} onClick={scrollToSection}>
							{this.props.data.link ? <a href={`${link}`} target="_blank">{buttonText}</a> : `${buttonText}`}
							<span className={`infoCard__box__textHolder__button__line infoCard__box__textHolder__button__line${colorName}`} />
						</button>
					</div>
					<div className={'infoCard__box__imgHolder'}>
						
						{direction.length > 0 ? <img src={img} alt={alt} /> : 
						<Slider {...settings}>
							{images.map((image) => 
								<img src={image} alt=""/>
							)}
						</Slider>}
					</div>
				</div>
			</section>
		);
	}
}
