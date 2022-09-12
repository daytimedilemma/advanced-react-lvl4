import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import {UseContext} from "./UseContext"
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"


export default function UglyThingsInput() {

   const {addToList} = useContext(UseContext)

    const [uglyThing, setUglyThing] = useState({
        imgUrl: "",
        title: "",
        description: ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setUglyThing(prevUglyThing => {
            return {
                ...prevUglyThing,
                [name]: value
            }
        })
    }


    function handleSubmit(e) {
        e.preventDefault()
        addToList(uglyThing)
    }  

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                <button>Submit</button>
            </form>

            <ul>
                {/* {list} */}
            </ul>


        </>
    )
}