import React from "react";

interface Props {
    changePathName: (param: string) => void;
}

export default class RenewableEnergySourcesComponent extends React.Component<any, any> {

    componentDidMount() {
        this.props.changePathName(window.location.pathname);
    }


    render() {
        return (
            <div>
                RenewableEnergySources
            </div>
        );
    }
}