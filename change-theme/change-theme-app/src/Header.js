import React, {useContext} from 'react';
import ThemeContext from "./themeContext"

function Header(props) {
    
    const context = useContext(ThemeContext)
    console.log(context)
    
    return (
        <div className={`${context.color}-theme`}>
            <h2>Theme Context</h2>
            <h3>You are currently using {context.color} mode</h3>
        </div>
    );
}

export default Header;