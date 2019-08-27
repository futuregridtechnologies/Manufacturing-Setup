import React, { Component } from 'react';
import { Card, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import ProcessingLayer from './ProcessingLayer'; 
import '../App.css';
import rightArrow from '../assets/right-arrow.png';
import downArrow from '../assets/down-arrow.png';


class Variant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : rightArrow,
        }
    }
    componentDidMount() {

    }

    toggleArrow = (column) => {
        if(this.state[column] == rightArrow) {
            this.setState({[column] : downArrow});
        } else {
            this.setState({[column] : rightArrow});
        }
    }

    displayProcessingLayer(data, parentData) {
        if(this.state.name == rightArrow){
            let returnDivs = [];
            returnDivs.push(<div style={{ gridColumn: 2 }} className="item2"> <div>{data.length + " Processing" + (data.length > 1? "s" : "")}</div> </div>);
            returnDivs.push(<div className='item2'><div>{data.reduce((sum, processingData) => sum = sum + processingData.quantityLayer.length , 0) + " Variants"} </div> </div>)
            return returnDivs;
        }
        return data.map(processingData => {
            let returnDivs = [];
            returnDivs.push(this.displayEachProcessing(processingData));
            return returnDivs
        })
    }

    displayEachProcessing(processingData) {
        return <ProcessingLayer processingData={processingData} toggleArrow = {this.toggleArrow}/>
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
                <div className = "item2" style={this.getRowSpan('name', nameRowWidth, this.props.data)}><div> <img src = {this.state.name}  style={{width: 10, height: 10}} onClick={() =>{this.toggleArrow('name')}}/>{this.props.data.name}</div> <br /> <span className="light">{this.props.data.numberOfRecipes} Recipes </span></div>
                {this.displayProcessingLayer(this.props.data.processingLayer, this.props.data)}
            </div>
        );
    }

    getRowSpan(column, rowHeight, data){
        return({ gridRow: '1 / span ' + rowHeight })
    }

    processingDataColumnSpan(spanRows) {
        return ({gridRow: 'span ' + spanRows,
                gridColumn : 2})
    }
}

export default Variant;