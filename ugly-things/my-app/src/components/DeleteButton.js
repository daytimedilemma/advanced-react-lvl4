import React, {useContext} from "react"
import {UseContext} from "./UseContext"

export default function DeleteButton(props){

   const context = useContext(UseContext)

    return (
        <button onClick={() => context.deleteHandle(props.id)}>Delete Ugly Thing</button>
    )
}