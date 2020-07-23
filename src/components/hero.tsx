import React from 'react';
import '../scss/componets/hero.scss';

interface Props {
    data: {
        title: string;
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
                            {title}
                        </h2>
                        <p className={"hero__container__textHolder__description"}>
                            {description}
                        </p>
                        <button
                            onClick={() => this.setState({isModalActive: !this.state.isModalActive})}
                            className={`hero__container__textHolder__button hero__container__textHolder__button${colorName}`}>
                            {buttonText}
                            <span className={"hero__container__textHolder__button__line"}/>
                            <div
                                className={`hero__container__textHolder__button__modal hero__container__textHolder__button__modal${this.state.isModalActive ? '--active' : ''}`}>
                                <p>{modal.title}</p>
                                <a>{modal.link}</a>
                            </div>
                        </button>
                    </div>
                    <div className={"hero__container__imageHolder"}>
                        <img src={img} alt={alt}/>
                    </div>
                </div>
            </section>
        );
    }
}