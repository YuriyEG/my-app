import React from "react";



function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return <div className="building">
        
    </div>
  }
  
  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Спрятать' : 'Показать'}
          </button>
          <WarningBanner warn={this.state.showWarning} />
        </div>
      );
    }
  }

  export default Page;