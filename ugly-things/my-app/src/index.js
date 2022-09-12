import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import App from "./App"
import {UseContextProvider} from "./components/UseContext"
const container = document.getElementById("root")

const root = ReactDOM.createRoot(container)

root.render(
    <UseContextProvider>
        <App />
    </UseContextProvider>
    )