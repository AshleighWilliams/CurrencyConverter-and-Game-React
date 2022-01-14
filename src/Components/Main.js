import React from 'react';
//import header from components.
import Header from './Header';
//import selector from dropdown component.
import Selector from './Dropdown';
//import converter from currency converter component.
import Converter from './CurrencyConverter/CurrencyConverter';
//import game from game component.
import Game from './Game/Game';

//create events to render and return the dropdown/ selector.
class Main extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            path: ""
            ,isNewPathDifferent: false
            ,
        };
    
        this.handleClick = this.handleClick.bind(this);
        this.selectRef = React.createRef();
    }

    onComponentMount() {
        
    }

    handleClick(event) {
        event.preventDefault();
        const newPath = (event.target.innerHTML).replace(" ", "");
        const currentPath = this.state.path;

        //set the state.
        this.setState({ path: newPath
            ,isNewPathDifferent: (currentPath === newPath ? false : true) }, () => {

            if ( this.state.isNewPathDifferent ) {
                console.log("should change");
                console.log("different: '" + currentPath + "' '" + newPath + "'");

            } else {
                //this.props.isNewPathDifferent = false;
            } 
          }); 
    }
    
    //render to display converter and game components.
    render() {
        const thePath = this.state.path;
        let whichComponentToDisplay;
        if( thePath === "Currencyconverter" ) {
            whichComponentToDisplay = <Converter />
        } else if ( thePath === "Win!" ) {
            whichComponentToDisplay = <Game />
        }
        
        //return header and selector/ dropdown components.
        return (
            <>
                <Header /><br />
                <Selector onClick={this.handleClick} selected={thePath} /> <br />
                {whichComponentToDisplay}
            </>
        )        
    }
}

//export the code to make it available outside this module.
export default Main;