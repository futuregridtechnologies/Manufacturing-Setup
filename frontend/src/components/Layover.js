import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class Layover extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    placeFiles = () =>    {     
        let returnArray = [];
        this.props.data.forEach(element =>{
         returnArray.push(<li>{element}</li>)
    })
    return returnArray
 
 }

    render() {
        console.log(this.props);
        return (
            <div ref={ref => this.el = ref}>
                <SlidingPane
                    className='some-custom-class'
                    overlayClassName='some-custom-overlay-class'
                    // isOpen={ this.state.isPaneOpen }
                    isOpen={this.props.stateData}
                    title='Hey, it is optional pane title.  I can be React component too.'
                    subtitle='Optional subtitle.'
                    onRequestClose={() => {
                        // triggered on "<" on left top click or on outside click
                        // this.setState({ isPaneOpen: false });
                        this.props.handleClose();
                    }}>

                    <div>
                    <ul>
                        {this.placeFiles()}                   
                       
                    </ul>
                    </div>
                </SlidingPane>

            </div>
        );
    }
}


// {this.props.data.forEach(file => 
//     <li>{file}</li>
// )}

export default Layover;