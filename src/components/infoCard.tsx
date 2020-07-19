import React from 'react';

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
	};
}

export default class InfoCardComponent extends React.Component<Props, any> {
	render() {
		const {
			alt,
			buttonText,
			colorName, //--blue, --red, --green
			description,
			direction, //--left
			img,
			title,
		} = this.props.data;

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
						<button className={'infoCard__box__textHolder__button'}>
							{buttonText}
							<span className='infoCard__box__textHolder__button__line' />
						</button>
					</div>
					<div className={'infoCard__box__imgHolder'}>
						<img src={img} alt={alt} />
					</div>
				</div>
			</section>
		);
	}
}
