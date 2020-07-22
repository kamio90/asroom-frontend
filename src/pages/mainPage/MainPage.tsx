import React from "react";
import HeroComponent from '../../components/hero';
import InfoCardComponent from '../../components/infoCard';
import mainImg from './../../img/pobrane.png';
import mlLogo from './../../img/ML-SYSTEM-logo.png';
import dLogo from './../../img/delfin-logo.png';
import technologicalSolutions from './../../img/technological-solutions.png';
import PartnersComponent from '../../components/partners';
import SliderComponent from '../../components/slider';
import ContactComponent from '../../components/contact';

interface Props {
    changePathName: (param: string) => void;
}

export default class MainPageComponent extends React.Component<Props, any> {
    state = {
		firstInfoCard: {
			title: 'ASROOM ZAPEWNIA najlepsze rozwiązania TECHNOLOGICZNE',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae felis quis lacus. Cras ut erat vitae enim efficitur porta vel a lorem. Curabitur tempus lacus ut odio vestibulum, nec vehicula nunc lobortis. Duis placerat, at fermentum tellus mollis a. Cras hendrerit felis neque, ut fermentum turpis porta vel. ',
			buttonText: 'skontaktuj się z nami',
			img: technologicalSolutions,
			alt: 'www.asroom.pl - zdjecie wyrozniajace',
			direction: '',
			colorName: '--red',
		},
		heroCard: {
			title: 'asroom',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae felis quis lacus. Cras ut erat vitae enim efficitur porta vel a lorem. Curabitur tempus lacus ut odio vestibulum,',
			buttonText: 'dowiedz się więcej',
			img: mainImg,
			alt: 'ASroom - innowacyjna firma',
			colorName: '--red',
			modal: {
				title: 'itroom',
				link: 'www.itroom.pl',
			},
		},
		partners: {
			title: 'Nasi partnerzy',
			description: 'SmartPixel has been designing cutting-edge applications combining state-of-the-art technology with tactile systems to communicate information through unforgettable experiences since 2008.',
			images: [mlLogo, dLogo, mlLogo, dLogo, mlLogo, dLogo],
			colorName: '--red',
		},
		slider: {
			images: [mlLogo, dLogo, mlLogo, dLogo, mlLogo, dLogo],
		},
		contact: {
			title: 'skontaktuj się z nami',
			buttonText: 'wyślij',
			acceptationText: 'Akceptuję regulamin',
			colorName: '--red',
			copyrightText:
				'Wszystkie prawa zastrzeżone. 2020 © ASRoom - Powered by LoremIpsum',
			addressInfo: {
				city: 'KRAKÓW',
				street: '31-314 Zygmuntowska 12/4',
				phoneNumber: '+48 698 409 740',
			},
			fields: {
				firstName: 'Imię',
				lastName: 'Nazwisko',
				email: 'Adres e-mail',
				phoneNumber: 'Numer telefonu',
				message: 'Twoja wiadomość...',
			},
		},
    };
    
    componentDidMount() {
        this.props.changePathName(window.location.pathname);
    }

    render() {
        return (
            <div>
                <HeroComponent data={this.state.heroCard} />
				<InfoCardComponent data={this.state.firstInfoCard} />
				<PartnersComponent data={this.state.partners} />
				<SliderComponent data={this.state.slider} />
                <ContactComponent data={this.state.contact} />
            </div>
        );
    }
}