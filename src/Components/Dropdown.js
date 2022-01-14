import React from 'react';
//import dropdown component from react bootstrap.
import Dropdown from 'react-bootstrap/Dropdown';
//import dropdown button component from react bootstrap.
import DropdownButton from 'react-bootstrap/DropdownButton';

//render and return the dropdown button with its items.
class Selector extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.props.onClick.bind(this);
    }
    render() {
        const selected = this.props.selected;
        return (
            <>
            <DropdownButton id="dropdown-item-button" ref={this.props.useRef} title="Click to Select Activity">
                <Dropdown.Item id="dropdown-item" as="button" active={selected === "Currencyconverter"} selected={selected === "Currencyconverter"} key={"Currencyconverter"} onClick={(e) => this.onClick(e)}>Currency converter</Dropdown.Item>
                <Dropdown.Item id="dropdown-item" as="button" active={selected === "Win!"} selected={selected === "Win!"} key={"Win!"} onClick={(e) => this.onClick(e)}>Win!</Dropdown.Item>
            </DropdownButton>
            <br />
            <br />
            </>
        )
    }
}

//export the code to make it available outside this module.
export default Selector;