import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

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
        }[]
    }
}

export default class NavComponent extends React.Component<Props, any> {
    render() {

        const {mainLink, Logo, pageLink} = this.props.Nav;

        return (
            <Router>
                <div className={"navigation"}>
                    <div className={"navigation__aside"}>
                        <nav className={"navigation__aside__box"}>
                            <ul className={"navigation__aside__box__navHolder"}>
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
                    <div className={"navigation__topPanel"}>
                        <div className={"navigation__topPanel__iconHolder"}>
                            <div className={"navigation__topPanel__iconHolder__burger"}>
                                <span/>
                                <span/>
                                <span/>
                            </div>
                            <img
                                className={"navigation__topPanel__iconHolder__image"}
                                src={Logo.src}
                                alt={Logo.alt}
                            />
                        </div>
                        <div className={"navigation__topPanel__pageNavigation"}>
                            {pageLink.map((value, index) => (
                                <NavComponentPageLink
                                    key={index}
                                    text={value.text}
                                    href={value.href}
                                />
                            ))}
                        </div>
                    </div>
                </div>
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
                className={"navigation__topPanel__pageNavigation__link"}
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
            <li className={"navigation__aside__box__navHolder__box"}>
                <Link
                    className={"navigation__aside__box__navHolder__box__item"}
                    to={`${href}`}
                >
                    {text}
                </Link>
            </li>
        );
    }
}