import React from 'react';
import NavComponent from "./components/Nav";
import ASRoomLogo from './img/ASRoomLogo.png';

class App extends React.Component<any, any> {

    state = {
        isPL: true,
        PL: {
            Nav: {
                mainLink: [
                    {
                        href: "/",
                        text: "O nas"
                    },
                    {
                        href: "/",
                        text: "Odnawialne Zrodla Energii"
                    },
                    {
                        href: "/",
                        text: "Systemy Oczyszczania Sciekow"
                    },
                    {
                        href: "/",
                        text: "Modernizacja"
                    },
                    {
                        href: "/",
                        text: "Panel Handlowy"
                    }
                ],
                Logo: {
                    src: ASRoomLogo,
                    alt: "www.asroom.pl - zdjecie loga firmy ASRoom w formacie .png",
                },
                pageLink: [
                    {
                        href: "/",
                        text: "O nas"
                    },
                    {
                        href: "/",
                        text: "Kontakt"
                    }
                ]
            }
        },
        EN: {
            Nav: {
                mainLink: [
                    {
                        href: "/",
                        text: "About Us"
                    },
                    {
                        href: "/",
                        text: "Renewable Energy Sources"
                    },
                    {
                        href: "/",
                        text: "Sewage Treatment Systems"
                    },
                    {
                        href: "/",
                        text: "Modernization"
                    },
                    {
                        href: "/",
                        text: "Trade Panel"
                    }
                ],
                Logo: {
                    src: ASRoomLogo,
                    alt: "www.asroom.pl - photo of the ASRoom company logo in .png format",
                },
                pageLink: [
                    {
                        href: "/",
                        text: "About Us"
                    },
                    {
                        href: "/",
                        text: "Contact"
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="App">
                <NavComponent Nav={this.state.isPL ? this.state.PL.Nav : this.state.EN.Nav}/>
            </div>
        );
    }
}

export default App;
