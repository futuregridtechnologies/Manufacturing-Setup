import React, { Component } from 'react';
import '../App.css';
class Variant extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        console.log(this.props)
        return (
            <div className="variant">
                {this.props.name}
                {this.props.quantity}
                {this.props.processing}
                {this.props.files.length}
            </div>
        );
    }
}

export default Variant;
