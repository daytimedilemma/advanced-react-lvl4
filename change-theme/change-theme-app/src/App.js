import React, {useState} from "react"
import Button from './Button';
import Header from './Header';
import ThemeContext from "./themeContext"

function App(props) {
    
    const [color, setColor] = useState("dark")
    
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
    }
    
    return (
        <>
            <ThemeContext.Provider value={{
                color: color, 
                toggleTheme: toggleTheme
            }}>
                <Header/>
                <Button/>
            </ThemeContext.Provider>
        </>
    );
}

export default App;