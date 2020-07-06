import React from "react";

interface Props {
    changePathName: (param: string) => void;
}

export default class ModernizationComponent extends React.Component<Props, any> {

    componentDidMount() {
        this.props.changePathName(window.location.pathname);
    }

    render() {
        return (
            <div>
                Modernization
            </div>
        )
    }
}