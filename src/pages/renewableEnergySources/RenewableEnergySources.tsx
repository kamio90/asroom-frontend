import React from 'react';
import InfoCardComponent from '../../components/infoCard';
import fotowoltaika from './../../img/fotowoltaika1.png';
import mlLogo from './../../img/ML-SYSTEM-logo.png';
import dLogo from './../../img/delfin-logo.png';
import mlimage from './../../img/CARPORT.jpg';
import kogeneracyjne from './../../img/DSC00849.png';
import HeroComponent from '../../components/hero';
import SliderComponent from '../../components/slider';
import ContactComponent from '../../components/contact';

interface Props {
	changePathName: (param: string) => void;
}

interface State {
	firstInfoCard: {
		title: string;
		description: string;
		buttonText: string;
		img: string;
		alt: string;
		direction: string;
		colorName: string;
	};
}

export default class RenewableEnergySourcesComponent extends React.Component<
	Props,
	State
> {
	state = {
		firstInfoCard: {
			title: 'Fotowoltaika',
			description:
				'Nowoczesne panele fotowoltaiczne służą do pozyskiwania energii słonecznej, dlatego ich popularna nazwa to panele słoneczne. Produkcja energii elektrycznej przez panele fotowoltaiczne jest wciąż młodą technologią, dlatego ML System to firma innowacyjna.',
			buttonText: 'sprawdź',
			img: fotowoltaika,
			alt: 'www.asroom.pl - fotowoltaika zdjecie wyrozniajace',
			direction: '',
			colorName: '--green',
		},
		heroCard: {
			title: 'odnawialne źródła energii',
			description:
				'Nowoczesne rozwiązania, pozwalające na całkowite wyeliminowanie tradycyjnych metod zarządzania energią.',
			buttonText: 'dowiedz się więcej',
			img: mlimage,
			alt: 'www.mlsystem.pl - innowacyjna firma',
			colorName: '--green',
			modal: {
				title: 'itroom',
				link: 'www.itroom.pl',
			},
		},
		secondInfoCard: {
			title: 'ML System',
			description:
				'ML System to producent i dystrybutor paneli fotowoltaicznych. Na polskim rynku jest jednym z pionierów, którego zakresem działania jest energia fotowoltaiczna. Nowoczesne panele fotowoltaiczne służą do pozyskiwania energii słonecznej, dlatego ich popularna nazwa to panele słoneczne. ',
			buttonText: 'strona partnera',
			img: mlLogo,
			alt: 'www.asroom.pl - fotowoltaika zdjęcie wyróżniające',
			direction: '--right',
			colorName: '--green',
		},
		slider: {
			images: [mlLogo, dLogo, mlLogo, dLogo, mlLogo, dLogo],
		},
		thirdInfoCard: {
			title: 'układy kogeneracyjne',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae felis quis lacus. Cras ut erat vitae enim efficitur porta vel a lorem. Curabitur tempus lacus ut odio vestibulum, nec vehicula nunc lobortis. Duis placerat, at fermentum tellus mollis a. Cras hendrerit felis neque, ut fermentum turpis porta vel. ',
			buttonText: 'strona partnera',
			img: kogeneracyjne,
			alt: 'www.asroom.pl - układy kogeneracyjne zdjęcie wyróżniające',
			direction: '--right',
			colorName: '--green',
		},
		contact: {
			title: 'skontaktuj się z nami',
			buttonText: 'wyślij',
			acceptationText: 'Akceptuję regulamin',
			colorName: '--green',
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
				<InfoCardComponent data={this.state.secondInfoCard} />
				<SliderComponent data={this.state.slider} />
				<InfoCardComponent data={this.state.thirdInfoCard} />
				<ContactComponent data={this.state.contact} />
			</div>
		);
	}
}
