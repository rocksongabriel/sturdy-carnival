import React, {useState, useEffect} from "react"


const UseEffectBasics = () => {
    const [value, setValue] = useState(0);
    // This will rerun everytime value changes 
    useEffect(() => {
        if (value >= 5){
            document.title = `The value is ${value}`
        }
    }, [value]); // the list is called a dependency array

    useEffect(() => {
        alert("This will run only on the first render");
    }, []); // use an empty dependency array to make the useEffect run once


    return <>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value+1)}>
            Increase
        </button>
    </>
}

export default UseEffectBasics;