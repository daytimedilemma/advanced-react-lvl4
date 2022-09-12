import { useState, useEffect } from "react"
import axios from "axios"


export default function PracticeConcepts() {

    // practicing useContext()
    // const [testUseContext, setTestUseContext] = useState("blue")

    // const toggleContext = () => {
    //     setTestUseContext(prevState => prevState === "blue" ? "black" : "blue")
    // }

    // Practing Retrieving Api 

    const [practiceAPI, setPracticeAPI] = useState([])

    useEffect(() => {
        axios.get("https://api.vschool.io/nickminer/thing/")
            .then(res => setPracticeAPI(prevPracticeAPI => {
                if (res.data[0] === null ){
                    return []
                } else {
                return [...prevPracticeAPI, res.data[0]]
                }
            })
                .catch(err => console.log(err))
            )
    }, [])

    





    return (
        <>
           
            

            {/* 
            <UseContext.Provider value={{
                testUseContext: testUseContext,
                toggleContext: toggleContext
            }}>
                <UglyList />
            </UseContext.Provider> */}
        </>
    )
}