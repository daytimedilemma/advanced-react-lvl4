import React, { useState, useEffect, useContext, Component } from "react"
import UglyList from "./components/UglyList"
import UglyThingsInput from "./components/UglyThingsInput"
import PracticeConcepts from "./components/PracticeConcepts"

export default function App() {

    

    return (
        <>
            <UglyThingsInput />
            <UglyList />
        </>
    )
}