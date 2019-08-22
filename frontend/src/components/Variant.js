import React, { Component } from 'react';
import { Card, OverlayTrigger, Popover, Button } from 'react-bootstrap';

import '../App.css';

const popover = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">Popover right</Popover.Title>
        <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
      </Popover.Content>
    </Popover>
);

class Variant extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentDidMount() {

    }
    displayQuantityLayer(data, parentData) {
        console.log(data)
        return data.map(quantityData => {
            try {
                return (<div className="item2">
                    <div className="item2" style={{ float: "left", marginLeft: "40px", opacity: 1 }}>{quantityData.quantity} </div>
                    <span className="item3 light">{quantityData.files.length + " Recipes"} </span>
                </div>)
            }
            catch (error) {
                console.log(parentData)
                console.log(quantityData)
                console.log(error)
            }
        })
    }
    // <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

    displayProcessingLayer(data, parentData) {
        return data.map(processingData => {
            console.log(processingData)
            let returnDivs = [];
            returnDivs.push(<div style={{ gridRow: 'span ' + processingData.quantityLayer.length, gridColumn: 2 }} className="item2"> <div>{processingData.processing}</div> <br /> <span className="light" style={{ marginTop: "5px" }}>{processingData.numberOfRecipes} Recipes</span></div>)
            returnDivs.push(this.displayQuantityLayer(processingData.quantityLayer, parentData));
            return returnDivs
        })
    }
    render() {
        console.log(this.props.data)
        let nameRowWidth = this.props.data.processingLayer.reduce((accumulator, el) => {
            let length = el.quantityLayer.length;
            return accumulator + length;
        }, 0)
        console.log(nameRowWidth)
        return (
            <div className="grid-container">
                <div style={{ gridRow: '1 / span ' + nameRowWidth }}><div>{this.props.data.name}</div> <br /> <span className="light">{this.props.data.numberOfRecipes} Recipes </span></div>
                {this.displayProcessingLayer(this.props.data.processingLayer, this.props.data)}
                <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
                    <Button variant="success">Click me to see</Button>
                </OverlayTrigger>

            </div>
        );
    }
}



export default Variant;
