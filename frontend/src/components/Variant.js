import React, { Component } from 'react';
import { Card, OverlayTrigger, Popover, Button } from 'react-bootstrap';

import '../App.css';
import rightArrow from '../assets/right-arrow.png';
import downArrow from '../assets/down-arrow.png';


class Variant extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            name : rightArrow,
            processingColumn : rightArrow,
        }
    }
    componentDidMount() {

    }
    popover = (files)=> (
        <Popover id="popover-basic">
            <Popover.Title as="h3" style={{textAlign : 'center'}}>Files</Popover.Title>
            <Popover.Content>
                {files.map(file =><div>{file.split('/')[file.split('/').length - 1]} <hr/></div>)}
          </Popover.Content>
        </Popover>
    );
    displayQuantityLayer(data, parentData) {
        console.log(data)
        return data.map(quantityData => {
            try {
                return (<div className="item2">
                    <div className="item3" style={{ float: "left", margin : 'auto' ,marginLeft: "40px", opacity: 1 }}>{quantityData.quantity} </div>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={this.popover(quantityData.files)}>
                    <div className="item3 light" style = {{textAlign: "center", margin: "auto inherit"}}>{quantityData.files.length + " Recipes"} </div>
                </OverlayTrigger>
                </div>)
            }
            catch (error) {
                // console.log(parentData)
                // console.log(quantityData)
                // console.log(error)
            }
        })
    }

    toggleArrow  = (column) =>{
        if(this.state[column] == rightArrow) {
            this.setState({[column] : downArrow});
        } else {
            this.setState({[column] : rightArrow});
            if(column == 'processingColumn') {
                this.setState({[column] : rightArrow})
            }
        }
    }

    displayProcessingLayer(data, parentData) {
        if(this.state.processingColumn == rightArrow){
            let returnDivs = [];
            returnDivs.push(<div style={{ gridColumn: 2 }} className="item2"> <div><img src = {this.state.processingColumn}  style={{width: 10, height: 10}} onClick={() =>{this.toggleArrow('processingColumn')}}/>{data.length + " Processing"}</div> </div>);
            returnDivs.push(<div className='item2'>{}</div>)
            return returnDivs;
        }
        return data.map(processingData => {
            // console.log(processingData)
            let returnDivs = [];
            // returnDivs.push(<div style={{ gridRow: 'span ' + processingData.quantityLayer.length, gridColumn: 2 }} className="item2"> <div>{processingData.processing}</div> <br /> <span className="light" style={{ marginTop: "5px" }}>{processingData.numberOfRecipes} Recipes</span></div>)
            returnDivs.push(<div style={{ gridRow: 'span ' + processingData.quantityLayer.length, gridColumn: 2 }} className="item2"> <div><img src = {this.state.processingColumn}  style={{width: 10, height: 10}} onClick={() =>{this.toggleArrow('processingColumn')}}/>{processingData.processing}</div> <br /> <span className="light" style={{ marginTop: "5px" }}>{processingData.numberOfRecipes} Recipes</span></div>)
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
                <div style={this.getRowSpan('name', nameRowWidth, this.props.data)}><div> <img src = {this.state.name}  style={{width: 10, height: 10}} onClick={() =>{this.toggleArrow('name')}}/>{this.props.data.name}</div> <br /> <span className="light">{this.props.data.numberOfRecipes} Recipes </span></div>
                {this.displayProcessingLayer(this.props.data.processingLayer, this.props.data)}
            </div>
        );
    }

    getRowSpan(column, rowHeight, data){
        if(this.state[column] === rightArrow && this.state.processingColumn === rightArrow){
            return ({gridRow : '1/ span 1'});
        } else if(this.state.name === downArrow && this.state.processingColumn === downArrow){
            return ({gridRow: '1/ span ' + data.processingLayer.length})
        } else {
            return({ gridRow: '1 / span ' + rowHeight })
        }
    }
}



export default Variant;
