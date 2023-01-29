

import React from "react";
import './App.css';
import App from "./App";


function ShowToggle(props) {
    if (!props.show) {
        return null;
    }


    return (
                
                        <div className="formmm">
                            
                              <input className="inpt"/>
                              <input></input>
                              <input></input>
                              <input type='submit' value='Отправить' class='mysubmit'/>
                        
                        </div>
                        
                

    )  

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
        <div className="footer">
            
            <div className='butt' onClick={this.ToggleClick}>
                {this.state.isTrue ? '   ' : 'Наши контакты'}
            </div>
            <ShowToggle show={this.state.isTrue}/>
        </div>
    );
}
}
export default ShowBuildPhoto;