import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { UseContext } from "./UseContext";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function UglyList(props) {
    // const [uglyThing, setUglyThing] = useState("")
    // const [uglyThings, setUglyThings] = useState([])
    // function handleSubmit(event) {
    //     event.preventDefault()
    //     axios.post()
    //     const newTodo = 

    const { uglyThingList, getUglyThings } = useContext(UseContext)

    useEffect(() => {
        getUglyThings()
    }, [])

    
    
    const list = uglyThingList.map((item => {
        return (
            <li key={item._id}>
                <img src={`${item.imgUrl}`} className="listPhoto" />
                <h3 >{item.title}</h3>
                <p>{item.description}</p>
                <DeleteButton id={item._id} />
                <EditButton 
                item={item}

                />
            </li>
        )
    }))

    return (
        <ul>{list}</ul>
    )
}