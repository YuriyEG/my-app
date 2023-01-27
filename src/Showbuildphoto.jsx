

import React from "react";
import './App.css';
import App from "./App";


function ShowToggle(props) {
    if (!props.show) {
        return null;
    }


    return <div className="building">
                <img src='1.jpg' alt='1'/>
                <img src='2.jpg' alt='2'/>
                <img src='3.jpg' alt='3'/>
                <img src='4.jpg' alt='4'/>
                <img src='5.jpg' alt='5'/>
                <img src='6.jpg' alt='6'/>
                <img src='7.jpg' alt='7'/>
                <img src='8.jpg' alt='8'/>
                

            </div>

}

class ShowBuildPhoto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isTrue: false};
        this.ToggleClick = this.ToggleClick.bind(this);
    }
    ToggleClick() {
        this.setState(state => ({
            isTrue: !state.isTrue
        }));
    }


render() {
    return (
        <div>
            
            <button className='butt' onClick={this.ToggleClick}>
                {this.state.isTrue ? 'Скрыть фото   ▲' : 'Смотреть фото строительства   ▼'}
            </button>
            <ShowToggle show={this.state.isTrue}/>
        </div>
    );
}
}
export default ShowBuildPhoto;