

import React from "react";
import './App.css';
import App from "./App";

function ShowToggle(props) {
    if (!props.show) {
        return null;
    }


    return <div className="building">

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
                {this.state.isTrue ? 'Скрыть фото   ▲' : 'Смотреть фото     ▼'}
            </button>
            <ShowToggle show={this.state.isTrue}/>
        </div>
    );
}
}
export default ShowBuildPhoto;