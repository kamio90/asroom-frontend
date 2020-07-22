import React from "react";
import HeroComponent from '../../components/hero';
import slupskImg from './../../img/os_slupsk.png';
import ContactComponent from '../../components/contact';

interface Props {
    changePathName: (param: string) => void;
}

export default class SewageTreatmentSystemsComponent extends React.Component<any, any> {
    state = {
		firstInfoCard: {
			title: 'ASROOM ZAPEWNIA najlepsze rozwiązania TECHNOLOGICZNE',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae felis quis lacus. Cras ut erat vitae enim efficitur porta vel a lorem. Curabitur tempus lacus ut odio vestibulum, nec vehicula nunc lobortis. Duis placerat, at fermentum tellus mollis a. Cras hendrerit felis neque, ut fermentum turpis porta vel. ',
			buttonText: 'skontaktuj się z nami',
			// img: technologicalSolutions,
			alt: 'www.asroom.pl - zdjecie wyrozniajace',
			direction: '',
			colorName: '--blue',
		},
		heroCard: {
			title: 'Systemy oczyszczania ścieków',
			description:
				'Skuteczniej niż tradycyjne oczyszczalnie. Linia nowoczesnych jednozbiornikowych oczyszczalni przydomowych. Wysoki stopień oczyszczania.',
			buttonText: 'dowiedz się więcej',
			img: slupskImg,
			alt: 'ASroom - innowacyjna firma',
			colorName: '--blue',
			modal: {
				title: 'itroom',
				link: 'www.itroom.pl',
			},
		},
		contact: {
			title: 'skontaktuj się z nami',
			buttonText: 'wyślij',
			acceptationText: 'Akceptuję regulamin',
			colorName: '--blue',
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