import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import MainPageComponent from "../pages/mainPage/MainPage";
import RenewableEnergySourcesComponent from "../pages/renewableEnergySources/RenewableEnergySources";
import SewageTreatmentSystemsComponent from "../pages/sewageTreatmentSystems/SewageTreatmentSystems";
import ModernizationComponent from "../pages/modernization/Modernization";
import TradePanelComponent from "../pages/tradePanel/TradePanel";
import "../scss/global/global.scss";
import '../scss/componets/nav.scss';

interface Props {
    Nav: {
        mainLink: {
            href: string,
            text: string
        }[],
        Logo: {
            src: string,
            alt: string,
        },
        pageLink: {
            href: string,
            text: string
        }[],
        downPanel: {
            language: string[],
            text: string
        },
        colorThemes: {
            href: string,
            className: string
        }[]
    },
    isPL: boolean
}

interface State {
    isMenuOpen: boolean;
    pagePathName: string;
}

export default class NavComponent extends React.Component<Props, State> {

    state = {
        isMenuOpen: false,
        pagePathName: window.location.pathname
    }

    changePathName = (param: string) => {
        this.setState({pagePathName: param});
    };

    getClassColorName = (param: string): string => {
        let className = "";
        this.props.Nav.colorThemes.find((value, index) => {
            if (value.href === param) {
                className = value.className;
            }
        });
        return className;
    }

    render() {
        const {mainLink, Logo, pageLink, downPanel} = this.props.Nav;
        const {isPL} = this.props;

        return (
            <Router>
                <div className={"topPanel"}>
                    <div className={"topPanel__iconHolder"}>
                        <div
                            className={"topPanel__iconHolder__burger"}
                            onClick={() => this.setState({isMenuOpen: !this.state.isMenuOpen})}
                        >
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <img
                            className={"topPanel__iconHolder__image"}
                            src={Logo.src}
                            alt={Logo.alt}
                        />
                    </div>
                    <div className={"topPanel__pageNavigation"}>
                        {pageLink.map((value, index) => (
                            <NavComponentPageLink
                                key={index}
                                text={value.text}
                                href={value.href}
                            />
                        ))}
                    </div>
                </div>
                <div className={this.state.isMenuOpen ? `aside aside--open` : `aside`}>
                    <nav className={"aside__box"}>
                        <ul className={"aside__box__navHolder"}>
                            {mainLink.map((value, index) => (
                                <NavComponentMainLink
                                    key={index}
                                    href={value.href}
                                    text={value.text}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={"downPanel"}>
                    <div className={"downPanel__languageSwitcher"}>
                        <span
                            className={`downPanel__languageSwitcher__text ${isPL ? `downPanel__languageSwitcher__text--active downPanel__languageSwitcher__text--active${this.getClassColorName(this.state.pagePathName)}` : ""}`}
                        >
                            {downPanel.language[0]}
                        </span>
                        <span
                            className={`downPanel__languageSwitcher__text ${isPL ? "" : `downPanel__languageSwitcher__text--active downPanel__languageSwitcher__text--active${this.getClassColorName(this.state.pagePathName)}`}`}>
                            {downPanel.language[1]}
                        </span>
                    </div>
                    <div className={"downPanel__pageScroll"}>
                        <span className={"downPanel__pageScroll__text"}>
                            {downPanel.text}
                        </span>
                    </div>
                </div>

                <Switch>
                    <Route exact path={"/"} component={MainPageComponent}>
                        <MainPageComponent changePathName={this.changePathName}/>
                    </Route>
                    <Route exact path={"/odnawialnezrodlaenergi"} component={RenewableEnergySourcesComponent}>
                        <RenewableEnergySourcesComponent changePathName={this.changePathName}/>
                    </Route>
                    <Route exact path={"/systemyoczyszczaniasciekow"} component={SewageTreatmentSystemsComponent}>
                        <SewageTreatmentSystemsComponent changePathName={this.changePathName}/>
                    </Route>
                    <Route exact path={"/modernizacja"} component={ModernizationComponent}>
                        <ModernizationComponent changePathName={this.changePathName}/>
                    </Route>
                    <Route exact path={"/panelhandlowy"} component={TradePanelComponent}>
                        <TradePanelComponent changePathName={this.changePathName}/>
                    </Route>
                    <Route exact path={"/renewableenergysources"} component={RenewableEnergySourcesComponent}>
                        <RenewableEnergySourcesComponent changePathName={this.changePathName}/>
                    </Route>
                    <Route exact path={"/sewagetreatmentsystems"} component={SewageTreatmentSystemsComponent}>
                        <SewageTreatmentSystemsComponent changePathName={this.changePathName}/>
                    </Route>
                    <Route exact path={"/modernization"} component={ModernizationComponent}>
                        <ModernizationComponent changePathName={this.changePathName}/>
                    </Route>
                    <Route exact path={"/tradepanel"} component={TradePanelComponent}>
                        <TradePanelComponent changePathName={this.changePathName}/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

interface Props3 {
    href: string;
    text: string;
}

export class NavComponentPageLink extends React.Component<Props3, any> {
    render() {
        const {href, text} = this.props;
        return (
            <Link
                to={href}
                className={"topPanel__pageNavigation__link"}
            >
                {text}
            </Link>
        );
    }
}

interface Props2 {
    href: string;
    text: string;
}

export class NavComponentMainLink extends React.Component<Props2, any> {
    render() {
        const {text, href} = this.props;
        return (
            <li className={"aside__box__navHolder__box"}>
                <Link
                    className={"aside__box__navHolder__box__item"}
                    to={`${href}`}
                >
                    {text}
                </Link>
            </li>
        );
    }
}