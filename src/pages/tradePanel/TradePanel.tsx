import React from "react";
import HeroComponent from '../../components/hero';
import oldImg from './../../img/Old-City-Dock.png';
import ContactComponent from '../../components/contact';

interface Props {
    changePathName: (param: string) => void;
}

export default class TradePanelComponent extends React.Component<any, any> {
    state = {
		firstInfoCard: {
			title: 'ASROOM ZAPEWNIA najlepsze rozwiązania TECHNOLOGICZNE',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae felis quis lacus. Cras ut erat vitae enim efficitur porta vel a lorem. Curabitur tempus lacus ut odio vestibulum, nec vehicula nunc lobortis. Duis placerat, at fermentum tellus mollis a. Cras hendrerit felis neque, ut fermentum turpis porta vel. ',
			buttonText: 'skontaktuj się z nami',
			// img: technologicalSolutions,
			alt: 'www.asroom.pl - zdjecie wyrozniajace',
			direction: '',
			colorName: '--orange',
		},
		heroCard: {
			title: 'Panel handlowy',
			description:
				'Skuteczniej niż tradycyjne oczyszczalnie. Linia nowoczesnych jednozbiornikowych oczyszczalni przydomowych. Wysoki stopień oczyszczania.',
			buttonText: 'dowiedz się więcej',
			img: oldImg,
			alt: 'ASroom - innowacyjna firma',
			colorName: '--orange',
			modal: {
				title: 'itroom',
				link: 'www.itroom.pl',
			},
		},
		contact: {
			title: 'skontaktuj się z nami',
			buttonText: 'wyślij',
			acceptationText: 'Akceptuję regulamin',
			colorName: '--orange',
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
                <ContactComponent data={this.state.contact} />
            </div>
        );
    }
}