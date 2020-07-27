import React from 'react';
import InfoCardComponent from '../../components/infoCard';
import HeroComponent from '../../components/hero';
import SliderComponent from '../../components/slider';
import ContactComponent from '../../components/contact';

import fotowoltaika from './../../img/fotowoltaika1.png';
import mlLogo from './../../img/ML-SYSTEM-logo.png';
import mlLogoBig from './../../img/ml-logo-big.png';
import dLogo from './../../img/delfin-logo.png';
import mlimage from './../../img/CARPORT.jpg';
import kogeneracyjne from './../../img/DSC00849.png';
import slide1 from './../../img/IMG_1876.png';
import slide2 from './../../img/domek1.png';
import slide3 from './../../img/domek2.png';
import slide4 from './../../img/DSC00421.png';
import slide5 from './../../img/IMG_1842.png';
import slide6 from './../../img/DJI_0044.png';

interface Props {
	changePathName: (param: string) => void;
}

interface State {
	firstInfoCard: {
		title ?: string;
		titleSpecial ?: string;
		titleContinue ?: string;
		description: string;
		buttonText: string;
		img: string;
		alt: string;
		direction: string;
		colorName: string;
		images: string[];
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
			link: 'https://mlsystem.pl/klient-indywidualny/moduly-pv-3/',
			images: [fotowoltaika],
		},
		heroCard: {
			title: 'odnawialne źródła',
			titleSpecial: ' energii ',
			titleContinue: '',
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
			link: 'https://mlsystem.pl/',
			images: [mlLogo],
		},
		slider: {
			images: [slide1, slide2, slide3, slide4, slide5, slide6],
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
			images: [kogeneracyjne],
		},
		contact: {
			title: 'skontaktuj się z nami',
			buttonText: 'wyślij',
			acceptationText: 'Akceptuję ',
			colorName: '--green',
			copyrightText:'Wszystkie prawa zastrzeżone. 2020 © ASRoom',
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
				<ContactComponent data={this.state.contact} />
			</div>
		);
	}
}
