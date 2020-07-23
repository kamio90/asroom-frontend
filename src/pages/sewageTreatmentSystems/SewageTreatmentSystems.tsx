import React from "react";
import HeroComponent from '../../components/hero';
import InfoCardComponent from '../../components/infoCard';
import SliderComponent from '../../components/slider';
import ContactComponent from '../../components/contact';

import slupskImg from './../../img/os_slupsk.png';
import mlLogo from './../../img/ML-SYSTEM-logo.png';
import dLogo from './../../img/delfin-logo.png';
import dLargeLogo from './../../img/logo_delfin.png';
import dBLogo from './../../img/Delfin_blue_logo.png';
import separatory from './../../img/sep-weglo.png';

interface Props {
    changePathName: (param: string) => void;
}

export default class SewageTreatmentSystemsComponent extends React.Component<any, any> {
    state = {
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
		firstInfoCard: {
			title: 'Sposoby oczyszczania',
			description:
				'Technologia MBBR (Moving Bed Biofilm Reactor), która polega na wykorzystaniu złoża biologicznego ruchomego (fluidalnego) wspomaganego osadem czynnym. Technologia osadu czynnego, polegająca na wykorzystaniu osadu czynnego znajdującego się w komorze napowietrzania i swobodnie zawieszonego w ściekach.',
			buttonText: 'sprawdź',
			img: dBLogo,
			alt: 'www.asroom.pl - Delfin sp. z o. o. zdjęcie wyrożniające',
			direction: '',
			colorName: '--blue',
		},
		secondInfoCard: {
			title: 'DELFIN SP. z o. o.',
			description:
				'Producent przydomowych oczyszczalni ścieków, separatorów węglowodorów, separatorów tłuszczów i skrobi, ekologicznych zbiorników na wodę deszczową oraz akcesoriów do systemów oczyszczania ścieków.',
			buttonText: 'skontaktuj się z nami',
			img: dLargeLogo,
			alt: 'www.asroom.pl - Delfin sp. z o. o. zdjęcie wyrożniające',
			direction: '--right',
			colorName: '--blue',
			link: 'http://www.delfin-polska.pl/',
		},
		slider: {
			images: [mlLogo, dLogo, mlLogo, dLogo, mlLogo, dLogo],
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
				<InfoCardComponent data={this.state.firstInfoCard} />
				<InfoCardComponent data={this.state.secondInfoCard} />
				<SliderComponent data={this.state.slider} />
				<InfoCardComponent data={this.state.thirdInfoCard} />
                <ContactComponent data={this.state.contact} />
            </div>
        );
    }
}