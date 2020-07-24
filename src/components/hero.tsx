import React from 'react';
import '../scss/componets/hero.scss';

interface Props {
    data: {
        title ?: string;
        titleSpecial ?: string;
        titleContinue ?: string;
        description: string;
        buttonText: string;
        img: string;
        alt: string;
        colorName: string;
        modal: {
            title: string;
            link: string;
        }
    };
}

interface State {
    isModalActive: boolean;
}

export default class HeroComponent extends React.Component<Props, State> {

    state = {
        isModalActive: false
    }

    render() {
        const {
            title,
            titleSpecial,
            titleContinue,
            description,
            buttonText,
            img,
            alt,
            colorName,
            modal
        } = this.props.data;
        return (
            <section className={"hero"}>
                <div className={"hero__container"}>
                    <div className={"hero__container__textHolder"}>
                        <h2 className={"hero__container__textHolder__title"}>
                            {title}<span className={`special special${colorName}`}>{titleSpecial}</span>{titleContinue}
                        </h2>
                        <p className={"hero__container__textHolder__description"}>
                            {description}
                        </p>
                    </div>
                    <div className={"hero__container__imageHolder"}>
                        <img src={img} alt={alt}/>
                    </div>
                </div>
            </section>
        );
    }
}