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
    displayQuantityLayer (data, parentData) {
        console.log(data)
        return data.map(quantityData => {
            try {
            return (<div className="item2"> {quantityData.quantity}<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{quantityData.files.length} Recipes </div>)
            }
            catch(error)  {
                console.log(parentData)
                console.log(quantityData)
                console.log(error)
            }
        })
    }
    
    displayProcessingLayer(data,parentData) {
        return data.map(processingData =>{
            console.log(processingData)
            let returnDivs = [];
            returnDivs.push (<div style = {{gridRow: 'span ' + processingData.quantityLayer.length, gridColumn:2}} className="item2">{processingData.processing} <br /> </div> )
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
            <div style = {{gridRow: '1 / span ' + nameRowWidth}}>{this.props.data.name} <br/>  Recipes</div>
            {this.displayProcessingLayer(this.props.data.processingLayer, this.props.data)}

          </div>
        );
    }
}



export default Variant;
