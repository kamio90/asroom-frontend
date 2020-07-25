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
	};
}

export default class InfoCardComponent extends React.Component<Props, any> {
	componentDidMount() {
		// let imagesTab = Array.prototype.slice.call(document.querySelectorAll('.infoCard__box:not(.infoCard__box--right) .infoCard__box__imgHolder img'));
		// let img_count = imagesTab.length;
		// console.log(img_count);
		// let active_index = 0;

		// imagesTab.forEach((element, index) => {
		// 	if(index == 0) {
		// 		element.classList.add('active');
		// 	}
		// })

		// setInterval(() => {
		// 	let active_img = document.querySelector('.faded.active');
		// 	console.log(imagesTab.indexOf(active_img));
		// 	if(imagesTab.indexOf(active_img) == img_count - 1) {
		// 		active_index = 0;
		// 	} else {
		// 		active_index++;
		// 	}

		// 	active_img!.classList.remove('active');
		// 	document.querySelectorAll('.infoCard__box:not(.infoCard__box--right) .infoCard__box__imgHolder img')[active_index].classList.add('active');
		// }, 2000);
	}

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
		} = this.props.data;

		const settings = {
            dots: false,
            infinite: true,
            fade: true,
            arrows: false,
			// autoplay: true,
			centerMode: true,
            speed: 2000,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
			pauseOnHover: false,
			// variableWidth: true,
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
						<button className={`infoCard__box__textHolder__button infoCard__box__textHolder__button${colorName}`}>
							{this.props.data.link ? <a href={`${link}`}>{buttonText}</a> : `${buttonText}`}
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
