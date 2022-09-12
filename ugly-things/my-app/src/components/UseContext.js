import React, {useState} from "react"
import axios from "axios"

const UseContext = React.createContext() 

function UseContextProvider(props) {


    const [uglyThingList, setUglyThingList] = useState([])

    function getUglyThings() {
        axios.get("https://api.vschool.io/nickminer/thing/")
            .then(res => setUglyThingList(res.data))
            .catch(err => console.log(err))
    }

    function addToList(uglyThing) {
        axios.post("https://api.vschool.io/nickminer/thing/", uglyThing)
            .then(res => setUglyThingList((prevUglyThingList) => {
                const thing = res.data

                return ([
                    ...prevUglyThingList,
                    {
                        _id: thing["_id"],
                        imgUrl: thing.imgUrl,
                        title: thing.title,
                        description: thing.description
                    }
                ])
            }))
            .catch(err => console.log(err))
    }


    function deleteHandle(id) {
        axios.delete(`https://api.vschool.io/nickminer/thing/${id}`)
            .then(res => setUglyThingList(prevUglyThingList => {
                return prevUglyThingList.filter(currentUglyThing => currentUglyThing._id !== id)  
            }))
            .catch(err => console.log(err))
    }

    const [isEditOn, setIsEditon] = useState(false)

    function editHandle() {
        setIsEditon(prevIsEditOn => prevIsEditOn ? false : true)
    }
    





    return (
        <UseContext.Provider value={{
            uglyThingList,
            setUglyThingList,
            getUglyThings,
            addToList,
            deleteHandle,
            isEditOn,
            editHandle,
        }}>
            {props.children}
        </UseContext.Provider>
    )
}

export  {UseContext, UseContextProvider}