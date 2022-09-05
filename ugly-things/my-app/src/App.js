import React, { useState, useEffect, useContext, Component } from "react"
import UglyList from "./components/UglyList"
import UglyThingsInput from "./components/UglyThingsInput"
export default function App() {

    

    return (
       
        <>
            <UglyThingsInput />
            <UglyList />
        </>
    )
}