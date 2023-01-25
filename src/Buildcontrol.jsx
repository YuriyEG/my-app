import React from 'react';

class BuildControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {istrue: true};
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(state => ({
            showtrue: !state.istrue
        }));
    }
    render() {
        return (
            <div className='mybutton'>
                <button onClick={this.toggle}>
                    {this.state.istrue ? 'Скрыть эти фото' : 'Показать фото'}
                </button>
            </div>
        );
    }
}

export default BuildControl;