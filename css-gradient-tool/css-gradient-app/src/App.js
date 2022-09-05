import React, { useState, useEffect } from "react"


export default function App() {
    // const [currentColor, setCurrentColor] = useState("643a3a")
    const [colorPicker, setColorPicker] = useState(
        {
            colorOne: "#ffffff",
            colorTwo: "#ffffff"
        }
    )
    // useEffect(() => {
    //     setCurrentColor(colorPicker.colorOne)
    // }, [colorPicker])
    function handleChange(e) {
        const { name, value } = e.target
        setColorPicker(prevColorPicker => {
            return (
                {
                    ...prevColorPicker,
                    [name]: value
                }
            )
        })
    }
    return (
        <div>
            <h1>Css Gradient Code Generator</h1>
            <div>
                <h2>Options</h2>
                <form>
                    <label>Color 1</label>
                    <span style={{
                        margin: "10px"
                    }}>{colorPicker.colorOne}</span>
                    <input type="color" name="colorOne" value={colorPicker.colorOne} onChange={handleChange} />
                    <br/>
                    <label>Color 2</label>
                    <span style={{
                        margin: "10px"
                    }}>{colorPicker.colorOne}</span>
                    <input type="color" name="colorTwo" value={colorPicker.colorTwo} onChange={handleChange} />
                </form>
            </div>
            <div style={{
                background: `linear-gradient(50deg, ${colorPicker.colorOne}, ${colorPicker.colorTwo})`,
                height: "300px",
                width: "300px",
                display: "block",
                border: "1px solid black",

                //    -moz-background: linear-gradient(50deg, #FFFF00 , #000000); 
                //    webkit: `linear-gradient(50deg, #${colorPicker.colorOne}, #${colorPicker.colorTwo})`
            }}>

            </div>
            <textarea readOnly value={`background: 
                linear-gradient(50deg, ${colorPicker.colorOne}, ${colorPicker.colorTwo});
               -moz-background: linear-gradient(50deg, ${colorPicker.colorOne}, ${colorPicker.colorTwo}; 
               -webkit: linear-gradient(50deg, ${colorPicker.colorOne}, ${colorPicker.colorTwo});
            `}
                style={{
                    color: "#ffffff",
                    width: "550px",
                    height: "75px",
                    backgroundColor: "#0a25ae"
                }}
            />
        </div>
    )
}

// color picker with a from, create a seprate state for textarea code?