import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import '../App.css';
class Variant extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="variant">
                <Card>
                    <Card.Body>
                        <Card.Text>
                            {this.props.name} <span>   </span>  {this.props.quantity} <span>   </span>  {this.props.processing} <span>   </span>  {this.props.files.length}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}

export default Variant;
