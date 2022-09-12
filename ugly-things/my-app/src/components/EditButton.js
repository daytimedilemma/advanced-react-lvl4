import React, { useContext, useState } from "react"
import { UseContext } from "./UseContext"
import axios from "axios"


export default function EditButton(props) {

    const {editHandle, isEditOn, uglyThingList, setUglyThingList} = useContext(UseContext)
    
    const [editForm, setEditForm] = useState({
        imgUrl: props.item.imgUrl,
        title: props.item.title,
        description: props.item.description
    })


    const  editUglyThing = (thing, update) => {
        setUglyThingList(prevUglyThingList => {
            return prevUglyThingList.map(currrentUglyThing => { 
                if (currrentUglyThing._id === thing._id) {
                    console.log(update)
                    return {
                        ...currrentUglyThing,
                        ...update
                    } 
                } else return currrentUglyThing
            })
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        
        axios.put(`https://api.vschool.io/nickminer/thing/${props.item._id}`, editForm)
            .then(res => editUglyThing(props.item, editForm))

            .catch(err => console.log(err))
        editHandle()
        
    }

    function editHandleChange(event){
        const { name, value } = event.target
        setEditForm(prevEditForm => {
            return {
                ...prevEditForm,
                [name]: value
            }
        })
        
    }

   

    return (
        <>
            
           { isEditOn ?
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="imgUrl"
                    placeholder={props.item.imgUrl}
                    value={editForm.imgUrl}
                    onChange={editHandleChange}
                    />
                     <input 
                    type="text" 
                    name="title"
                    placeholder={props.item.title}
                    value={editForm.title}
                    onChange={editHandleChange}
                    />
                     <input 
                    type="text" 
                    name="description"
                    placeholder={props.item.description}
                    value={editForm.description}
                    onChange={editHandleChange}
                    />
                    
                    <button>Submit Edit</button>
                </form>
                
                : <button onClick={editHandle}>Edit </button>}
        </>
    )
}