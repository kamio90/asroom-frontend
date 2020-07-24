import React from 'react';
import NavComponent from './components/Nav';
import ASRoomLogo from './img/ASRoomLogo.png';

interface State {
	isPL: boolean;
	PL: {
		Nav: {
			mainLink: {
				href: string;
				text: string;
			}[];
			Logo: {
				src: string;
				alt: string;
			};
			pageLink: {
				href: string;
				text: string;
			}[];
			downPanel: {
				language: string[];
				text: string;
			};
			colorThemes: {
				href: string;
				className: string;
			}[];
		};
	};
	EN: {
		Nav: {
			mainLink: {
				href: string;
				text: string;
			}[];
			Logo: {
				src: string;
				alt: string;
			};
			pageLink: {
				href: string;
				text: string;
			}[];
			downPanel: {
				language: string[];
				text: string;
			};
			colorThemes: {
				href: string;
				className: string;
			}[];
		};
	};
}

class App extends React.Component<any, State> {
	state = {
		isPL: true,
		PL: {
			Nav: {
				mainLink: [
					{
						href: '/',
						text: 'ASROOM',
					},
					{
						href: '/odnawialnezrodlaenergi',
						text: 'Odnawialne Zrodla Energii',
					},
					{
						href: '/systemyoczyszczaniasciekow',
						text: 'Systemy Oczyszczania Sciekow',
					},
					// {
					// 	href: '/modernizacja',
					// 	text: 'Modernizacja',
					// },
					// {
					// 	href: '/panelhandlowy',
					// 	text: 'Panel Handlowy',
					// },
				],
				Logo: {
					src: ASRoomLogo,
					alt:
						'www.asroom.pl - zdjecie loga firmy ASRoom w formacie .png',
				},
				pageLink: [
					{
						href: '/',
						text: 'O nas',
					},
					{
						href: '/',
						text: 'Kontakt',
					},
				],
				downPanel: {
					language: ['PL', 'EN'],
					text: 'Scroll',
				},
				colorThemes: [
					{
						href: '/',
						className: '--red',
					},
					{
						href: '/odnawialnezrodlaenergi',
						className: '--green',
					},
					{
						href: '/systemyoczyszczaniasciekow',
						className: '--blue',
					},
					{
						href: '/modernizacja',
						className: '--red',
					},
					{
						href: '/panelhandlowy',
						className: '--yellow',
					},
				],
			},
		},
		EN: {
			Nav: {
				mainLink: [
					{
						href: '/',
						text: 'About Us',
					},
					{
						href: '/renewableenergysources',
						text: 'Renewable Energy Sources',
					},
					{
						href: '/sewagetreatmentsystems',
						text: 'Sewage Treatment Systems',
					},
					// {
					// 	href: '/modernization',
					// 	text: 'Modernization',
					// },
					// {
					// 	href: '/tradepanel',
					// 	text: 'Trade Panel',
					// },
				],
				Logo: {
					src: ASRoomLogo,
					alt:
						'www.asroom.pl - photo of the ASRoom company logo in .png format',
				},
				pageLink: [
					{
						href: '/',
						text: 'About Us',
					},
					{
						href: '/',
						text: 'Contact',
					},
				],
				downPanel: {
					language: ['PL', 'EN'],
					text: 'Scroll',
				},
				colorThemes: [
					{
						href: '/',
						className: '--red',
					},
					{
						href: '/renewableenergysources',
						className: '--green',
					},
					{
						href: '/sewagetreatmentsystems',
						className: '--blue',
					},
					{
						href: '/modernization',
						className: '--red',
					},
					{
						href: '/tradepanel',
						className: '--yellow',
					},
				],
			},
		},
	};

	changeNation = () => {
		this.setState({ isPL: !this.state.isPL });
	};

	render() {
		return (
			<div className='App' onScroll={() => {
				console.log('123');
			}}>
				<NavComponent
					Nav={
						this.state.isPL ? this.state.PL.Nav : this.state.EN.Nav
					}
					isPL={this.state.isPL}
					changeNation={this.changeNation}
				/>
			</div>
		);
	}
}

export default App;
