import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import MainPageComponent from '../pages/mainPage/MainPage';
import RenewableEnergySourcesComponent from '../pages/renewableEnergySources/RenewableEnergySources';
import SewageTreatmentSystemsComponent from '../pages/sewageTreatmentSystems/SewageTreatmentSystems';
import ModernizationComponent from '../pages/modernization/Modernization';
import TradePanelComponent from '../pages/tradePanel/TradePanel';
import '../scss/global/global.scss';
import '../scss/componets/nav.scss';

interface Props {
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
            param: number;
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
    isPL: boolean;
    changeNation: () => void;
}

interface State {
    isMenuOpen: boolean;
    pagePathName: string;
}

export default class NavComponent extends React.Component<Props, State> {
    state = {
        isMenuOpen: false,
        pagePathName: window.location.pathname,
    };

    changePathName = (param: string) => {
        this.setState({pagePathName: param});
    };

    getClassColorName = (param: string): string => {
        let className = '';
        this.props.Nav.colorThemes.find((value, index) => {
            if (value.href === param) {
                className = value.className;
            }
        });
        return className;
    };

    render() {
        const {mainLink, Logo, pageLink, downPanel} = this.props.Nav;
        const {isPL, changeNation} = this.props;
        

        return (
            
            <Router>
                <div className={'topPanel'}>
                    <div className={'topPanel__iconHolder'}>
                        <div
                            className={'topPanel__iconHolder__burger'}
                            onClick={() =>
                                this.setState({
                                    isMenuOpen: !this.state.isMenuOpen,
                                })
                            }
                        >
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <img
                            className={'topPanel__iconHolder__image'}
                            src={Logo.src}
                            alt={Logo.alt}
                        />
                    </div>
                    <div
                        className={`topPanel__pageNavigation topPanel__pageNavigation${this.getClassColorName(
                            this.state.pagePathName
                        )}`}
                    >
                        {pageLink.map((value, index) => (
                            <NavComponentPageLink
                                key={index}
                                text={value.text}
                                href={value.href}
                                param={value.param}
                            />
                        ))}
                    </div>
                </div>
                <div
                    className={
                        this.state.isMenuOpen
                            ? `aside aside--open aside${this.getClassColorName(
                            this.state.pagePathName
                            )}`
                            : `aside aside${this.getClassColorName(
                            this.state.pagePathName
                            )}`
                    }
                >
                    <div
                        className={'aside__burger'}
                        onClick={() =>
                            this.setState({
                                isMenuOpen: !this.state.isMenuOpen,
                            })
                        }
                    >
                        <span/>
                        <span/>
                    </div>
                    <nav className={'aside__box'}>
                        <ul className={'aside__box__navHolder'}>
                            {mainLink.map((value, index) => (
                                <NavComponentMainLink
                                    key={index}
                                    href={value.href}
                                    text={value.text}
                                    actionClose={() => {
                                        this.setState({
                                            isMenuOpen: !this.state
                                                .pagePathName,
                                        });
                                        window.scrollTo({ behavior: 'smooth', top: 0, left: 0});
                                        }
                                    }
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={'downPanel'}>
                    <div className={'downPanel__languageSwitcher'}>
						<span
                            className={`downPanel__languageSwitcher__text ${
                                isPL
                                    ? `downPanel__languageSwitcher__text--active downPanel__languageSwitcher__text--active${this.getClassColorName(
                                    this.state.pagePathName
                                    )}`
                                    : ''
                            }`}
                            onClick={changeNation}
                        >
							{downPanel.language[0]}
						</span>
                        <span
                            className={`downPanel__languageSwitcher__text ${
                                isPL
                                    ? ''
                                    : `downPanel__languageSwitcher__text--active downPanel__languageSwitcher__text--active${this.getClassColorName(
                                    this.state.pagePathName
                                    )}`
                            }`}
                            onClick={changeNation}
                        >
							{downPanel.language[1]}
						</span>
                    </div>
                    <div
                        className={`downPanel__pageScroll downPanel__pageScroll${this.getClassColorName(
                            this.state.pagePathName
                        )}`}
                        onClick={() => window.scroll({
                            top: window.pageYOffset + window.innerHeight,
                            left: 0,
                            behavior: "smooth"
                        })}
                    >
						<span className={`downPanel__pageScroll__text`}>
							{downPanel.text}
						</span>
                    </div>
                </div>

                <Switch>
                    <Route exact path={'/'} component={MainPageComponent}>
                        <MainPageComponent
                            changePathName={this.changePathName}
                        />
                    </Route>
                    <Route
                        exact
                        path={'/odnawialnezrodlaenergi'}
                        component={RenewableEnergySourcesComponent}
                    >
                        <RenewableEnergySourcesComponent
                            changePathName={this.changePathName}
                        />
                    </Route>
                    <Route
                        exact
                        path={'/systemyoczyszczaniasciekow'}
                        component={SewageTreatmentSystemsComponent}
                    >
                        <SewageTreatmentSystemsComponent
                            changePathName={this.changePathName}
                        />
                    </Route>
                    {/* <Route
                        exact
                        path={'/modernizacja'}
                        component={ModernizationComponent}
                    >
                        <ModernizationComponent
                            changePathName={this.changePathName}
                        />
                    </Route> */}
                    {/* <Route
                        exact
                        path={'/panelhandlowy'}
                        component={TradePanelComponent}
                    >
                        <TradePanelComponent
                            changePathName={this.changePathName}
                        />
                    </Route> */}
                    <Route
                        exact
                        path={'/renewableenergysources'}
                        component={RenewableEnergySourcesComponent}
                    >
                        <RenewableEnergySourcesComponent
                            changePathName={this.changePathName}
                        />
                    </Route>
                    <Route
                        exact
                        path={'/sewagetreatmentsystems'}
                        component={SewageTreatmentSystemsComponent}
                    >
                        <SewageTreatmentSystemsComponent
                            changePathName={this.changePathName}
                        />
                    </Route>
                    <Route
                        exact
                        path={'/modernization'}
                        component={ModernizationComponent}
                    >
                        <ModernizationComponent
                            changePathName={this.changePathName}
                        />
                    </Route>
                    <Route
                        exact
                        path={'/tradepanel'}
                        component={TradePanelComponent}
                    >
                        <TradePanelComponent
                            changePathName={this.changePathName}
                        />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

interface Props3 {
    href: string;
    text: string;
    param: number;
}

export class NavComponentPageLink extends React.Component<Props3, any> {
    scrolledTo = (param: number) => {
        window.scrollTo({ behavior: 'smooth', top:param, left: 0});
    }

    render() {
        const {href, text} = this.props;
        return (
            <Link to={href} className={`topPanel__pageNavigation__link`} onClick={() => this.scrolledTo(this.props.param)} >
                {text}
            </Link>
        );
    }
}

interface Props2 {
    href: string;
    text: string;
    actionClose: () => void;
}

export class NavComponentMainLink extends React.Component<Props2, any> {
    render() {
        const {text, href, actionClose} = this.props;
        return (
            <li className={'aside__box__navHolder__box'} onClick={actionClose}>
                <Link
                    className={'aside__box__navHolder__box__item'}
                    to={`${href}`}
                >
                    {text}
                </Link>
            </li>
        );
    }
}
