import React from "react";
import HeroComponent from '../../components/hero';
import InfoCardComponent from '../../components/infoCard';
import SliderComponent from '../../components/slider';
import ContactComponent from '../../components/contact';

import modernization from './../../img/modernization.png';
import technologicalSolutions from './../../img/technological-solutions.png';
import mlLogo from './../../img/ML-SYSTEM-logo.png';
import dLogo from './../../img/delfin-logo.png';

interface Props {
    changePathName: (param: string) => void;
}

export default class ModernizationComponent extends React.Component<Props, any> {
    state = {
		firstInfoCard: {
			title: 'lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae felis quis lacus. Cras ut erat vitae enim efficitur porta vel a lorem. Curabitur tempus lacus ut odio vestibulum, nec vehicula nunc lobortis. Duis placerat, at fermentum tellus mollis a. Cras hendrerit felis neque, ut fermentum turpis porta vel. ',
			buttonText: 'lorem ipsum',
			img: technologicalSolutions,
			alt: 'www.asroom.pl - zdjecie wyrozniajace',
			direction: '',
			colorName: '--red',
			images: [technologicalSolutions],
		},
		secondInfoCard: {
			title: 'lorem ipsum',
			description:
				'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.',
			buttonText: 'lorem ipsum',
			img: mlLogo,
			alt: 'www.asroom.pl - fotowoltaika zdjęcie wyróżniające',
			direction: '--right',
			colorName: '--red',
			images: [mlLogo],
		},
		heroCard: {
			title: 'Modernizacja',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae felis quis lacus. Cras ut erat vitae enim efficitur porta vel a lorem. Curabitur tempus lacus ut odio vestibulum',
			buttonText: 'dowiedz się więcej',
			img: modernization,
			alt: 'ASroom - innowacyjna firma',
			colorName: '--red',
			modal: {
				title: 'itroom',
				link: 'www.itroom.pl',
			},
		},
		slider: {
			images: [mlLogo, dLogo, mlLogo, dLogo, mlLogo, dLogo],
		},
		contact: {
			title: 'skontaktuj się z nami',
			buttonText: 'wyślij',
			acceptationText: 'Akceptuję ',
			colorName: '--red',
			copyrightText:
				'Wszystkie prawa zastrzeżone. 2020 © ASRoom',
			copyrightTextContinue: 'Wykonanie ITroom.pl',
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
				<InfoCardComponent data={this.state.secondInfoCard} />
				<SliderComponent data={this.state.slider} />
				<InfoCardComponent data={this.state.secondInfoCard} />
                <ContactComponent data={this.state.contact} />
            </div>
        )
    }
}