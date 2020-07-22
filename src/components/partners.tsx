import React from 'react';
import '../scss/componets/partners.scss';

interface Props {
    data: {
        title: string;
        description: string;
        images: string[];
        colorName: string;
    }
}

export default class PartnersComponent extends React.Component<Props, any> {
	render() {
		const {
			title,
            description,
            images,
            colorName,
		} = this.props.data;

		return (
			<section className='partners'>
				<div className="partners__box">
                    <div className="partners__box__imgHolder">
                        {images.map((image) => 
                            <div className="partners__box__imgHolder__image">
                                <img src={image} alt=""/>
                            </div>
                        )}
                    </div>
                    <div className="partners__box__textHolder">
                        <h2 className="partners__box__textHolder__title">{title}</h2>
                        <span className={`partners__box__textHolder__line partners__box__textHolder__line${colorName}`}></span>
                        <p className="partners__box__textHolder__description">{description}</p>
                    </div>
                </div>
			</section>
		);
	}
}