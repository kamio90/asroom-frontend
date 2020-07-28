import React from "react";
import HeroComponent from '../../components/hero';
import InfoCardComponent from '../../components/infoCard';
import PartnersComponent from '../../components/partners';
import SliderComponent from '../../components/slider';
import InfoCardSliderComponent from '../../components/infoCardSlide';
import ContactComponent from '../../components/contact';

import mainImg from './../../img/pobrane-2.png';
import mlLogo from './../../img/ML-SYSTEM-logo.png';
import dLogo from './../../img/delfin-logo.png';
import dBLogo from './../../img/Delfin_blue_logo.png';
import technologicalSolutions1 from './../../img/technological-solutions.png';
import technologicalSolutions from './../../img/office-1209640_960_720.webp';
import technologicalSolutions2 from './../../img/writing-1149962_960_720.webp';
import slide1 from './../../img/IMG_1876.png';
import slide2 from './../../img/domek1.png';
import slide3 from './../../img/domek2.png';
import slide4 from './../../img/DSC00421.png';
import slide5 from './../../img/IMG_1842.png';
import slide6 from './../../img/DJI_0044.png';

interface Props {
    changePathName: (param: string) => void;
}

export default class MainPageComponent extends React.Component<Props, any> {
    state = {
		firstInfoCard: {
			title: 'ASROOM ZAPEWNIA najlepsze rozwiązania TECHNOLOGICZNE',
			description:
				'Nieustannie poszerzamy swoja oferte zaczelismy od doradctwa finansowego oraz konsultingu a dzis oferujemy najlepsze na rynku rozwiazana z dziedziny fotowoltaiki i urzadzenia do odzysku woduy opadowej wspieramy naszych klientow  od poczatku do konca inwestycji Nie uznajemy kompromisów – zadowolenie klienta jest dla nas priorytetem.',
			buttonText: 'skontaktuj się z nami',
			img: technologicalSolutions,
			alt: 'www.asroom.pl - zdjecie wyrozniajace',
			direction: '',
			colorName: '--red',
			images: [technologicalSolutions,technologicalSolutions1, technologicalSolutions2],
			scrollToSection: () => {window.scrollTo({ behavior: 'smooth', top: window.document.body.offsetHeight - window.innerHeight, left: 0})},
		},
		heroCard: {
			title: '',
			titleSpecial: 'as',
			titleContinue: 'room',
			description:
				'ASROOM Sp. z o.o. dziala na rynku od 2014r. Firma od początku stawiała na innowacyjność, ciągły rozwój i dobro klienta. Nieustannie podnosi swoje kwalifikacje, by swoim klientom oferować najoptymalniejsze rozwiązania rynkowe.',
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
			description: 'Naszymi partnerami sa Polscy liderzy w branżach energii odnawialnej i gospodarki wodno sciekowej ich długoletnie doświadczenie i liczne nagrody najlepsze z możliwych rozwiązań oraz zapewniają stabilność dostaw i gwarancje długoletniej opieki serwisowej, między innymi: Godło Teraz Polska, Skrzydla Biznesu oraz Gepard Biznesu.',
			images: [mlLogo, dLogo, mlLogo, dLogo, mlLogo, dLogo],
			colorName: '--red',
		},
		slider: {
			images: [slide1, slide2, slide3, slide4, slide5, slide6],
		},
		contact: {
			title: 'skontaktuj się z nami',
			buttonText: 'wyślij',
			acceptationText: 'Akceptuję ',
			colorName: '--red',
			copyrightText:
				'Wszystkie prawa zastrzeżone. 2020 © ASRoom',
			copyrightTextContinue: 'Wykonanie ',
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