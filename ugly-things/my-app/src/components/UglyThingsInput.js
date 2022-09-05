import React, { useState } from "react"
import UglyList from "./UglyList"
export default function UglyThingsInput() {
    const [uglyThing, setUglyThing] = useState({
        id: 0,
        imgUrl: "",
        title: "",
        description: ""
    })

    const [uglyThingList, setUglyThingList] = useState([])
    const list = uglyThingList.map((name, index) => {
        return (
            <li id={index}>
                <img src={`${name.imgUrl}`} alt="user ImgUrl"/>
                <h3>{name.title}</h3>
                <p>{name.description}</p>
            </li>
        )
    })

    function handleChange(event){
        const {name, value} = event.target
        setUglyThing(prevUglyThing => {
            return {
                ...prevUglyThing,
                [name]:  value
            }
        })
    }

    function addToList(e){
        e.preventDefualt()
        setUglyThingList(prevUglyThingList => {
            return [
                ...prevUglyThingList,
                uglyThing
            ]
        })
    }

 
    return (
        <>
            <form>
                <input 
                type="text" 
                name="imgUrl" 
                placeholder="Your Image Url"
                value={uglyThing.imgUrl}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="title" 
                placeholder="Your Title"
                value={uglyThing.title}
                onChange={handleChange}
                />
                <input 
                type="text" 
                name="description" 
                placeholder="Your Description"
                value={uglyThing.description}
                onChange={handleChange}
                />
                <button onClick={addToList}>Submit</button>
            </form>
            <ul>
                {list}
            </ul>
        </>
    )
}