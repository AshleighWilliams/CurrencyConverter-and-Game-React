import React from 'react';

//below creates a header.
class Header extends React.Component{
    render(){
        return(
            <div>
                <h2>Dropdown Selector : Currency Converter or Win!</h2>
                <hr />
            </div>
        );
    }
}

//export the code to make it available outside the module.
export default Header;