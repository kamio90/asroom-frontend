import React from 'react';
import InfoCardComponent from '../../components/infoCard';
import fotowoltaika from './../../img/fotowoltaika1.png';
import mlimage from './../../img/CARPORT.jpg';
import HeroComponent from '../../components/hero';
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
				<ContactComponent data={this.state.contact} />
			</div>
		);
	}
}
