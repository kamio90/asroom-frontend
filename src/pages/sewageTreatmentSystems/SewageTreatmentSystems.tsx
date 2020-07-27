import React from "react";
import HeroComponent from '../../components/hero';
import InfoCardComponent from '../../components/infoCard';
import SliderComponent from '../../components/slider';
import ContactComponent from '../../components/contact';

import slupskImg from './../../img/water-management-4.jpg';
import technologicalSolutions from './../../img/technological-solutions.png';
import oczyszczacz from './../../img/DELFIN_RAIN_0_karta_tech_11.jpg';
import mlLogo from './../../img/ML-SYSTEM-logo.png';
import dLogo from './../../img/delfin-logo.png';
import dLargeLogo from './../../img/logo_delfin.png';
import dBLogo from './../../img/Delfin_blue_logo.png';
import separatory from './../../img/sep-weglo.png';
import slide1 from './../../img/47.jpg';
import slide2 from './../../img/264.jpg';
import slide3 from './../../img/536.jpg';
import slide4 from './../../img/41.jpg';

interface Props {
    changePathName: (param: string) => void;
}

export default class SewageTreatmentSystemsComponent extends React.Component<any, any> {
    state = {
		heroCard: {
			title: 'Systemy ',
			titleSpecial: 'oczyszczania ',
			titleContinue: 'ścieków',
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
		firstInfoCard: {
			title: 'Zbiorniki na wodę deszczową',
			description:
				'Zbiorniki na wodę deszczową DELFIN RAIN pomagają zmniejszyć zużycie wody w przeciętnym gospodarstwie domowym do 30%. To niebagatelna oszczędność zważywszy na zwiększające się ceny wody, wynikające z rosnących kosztów jej wydobycia i uzdatnienia.',
			buttonText: 'sprawdź',
			img: dBLogo,
			alt: 'www.asroom.pl - Delfin sp. z o. o. zdjęcie wyrożniające',
			direction: '',
			colorName: '--blue',
			images: [dBLogo, oczyszczacz],
			link: 'http://www.delfin-polska.pl/oferta/zbiorniki-na-wode-deszczowa',
		},
		secondInfoCard: {
			title: 'DELFIN SP. z o. o.',
			description:
				'Producent przydomowych oczyszczalni ścieków, separatorów węglowodorów, separatorów tłuszczów i skrobi, ekologicznych zbiorników na wodę deszczową oraz akcesoriów do systemów oczyszczania ścieków.',
			buttonText: 'strona partnera',
			img: dLargeLogo,
			alt: 'www.asroom.pl - Delfin sp. z o. o. zdjęcie wyrożniające',
			direction: '--right',
			colorName: '--blue',
			link: 'http://www.delfin-polska.pl/',
			images: [dLargeLogo],
		},
		slider: {
			images: [slide1, slide2, slide3, slide4],
		},
		thirdInfoCard: {
			title: 'hybrydowe separatory węglowodorów',
			description:
				'Separator koalescencyjny hybrydowy, wg wynalazku, ma postać zbiornika z wyprowadzeniami dla wlotu i wylotu cieczy, zawierający komorę oczyszczania z co najmniej jednym filtrem koalescencyjnym, charakteryzującym się tym, że na drodze flotacyjnego przepływu cieczy do filtra koalescencyjnego usytuowane jest co najmniej jedno urządzenie przepływowe.',
			buttonText: 'dowiedz się więcej',
			img: separatory,
			alt: 'www.asroom.pl - Delfin sp. z o. o. zdjęcie wyrożniające',
			direction: '--right',
			colorName: '--blue',
			images: [separatory],
		},
		contact: {
			title: 'skontaktuj się z nami',
			buttonText: 'wyślij',
			acceptationText: 'Akceptuję ',
			colorName: '--blue',
			copyrightText:'Wszystkie prawa zastrzeżone. 2020 © ASRoom',
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
				<InfoCardComponent data={this.state.secondInfoCard} />
				<SliderComponent data={this.state.slider} />
				{/* <InfoCardComponent data={this.state.thirdInfoCard} /> */}
                <ContactComponent data={this.state.contact} />
            </div>
        );
    }
}