import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Registry(){
    const [registryData, setRegistryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    //Add Item in the list / array
    function addItem(e) {
        e.preventDefault();
        //if(error) return;
        //alert(textInput);
        if(textInput.length == 0) { setError(true); return; }
        const tempData = [...registryData];
        tempData.push(textInput);
        setRegistryData(tempData);
        setTextInput("")
        
    }
    
    //Using Hook useEffect to check effect after render data input
    useEffect(() => {
        if(textInput.length > 10) setError(true);
        else setError(false)
    }, [textInput])

    //Remove Item in the list / array
    const removeItem = (index) => {
        let newData = [...registryData];
        newData.splice(index, 1);
        setRegistryData(newData);
    }

    //Update Item in the list / array
    const editItem = (index) =>{
        if(error) return;

        let newData = [...registryData];
        newData[index] = textInput;
        setRegistryData(newData);
    }

    console.log(registryData);

    return(
        <><div className="registry">
            <h1>Welcome. You can see registry entries on this page...</h1>
            <form onSubmit={addItem}>
                <label>
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value) } />
                </label>
                <input type="submit" value="Submit" /> 
            </form>
            { error? <span style={{color:"red"}}>Erro Occured.</span> : null }
            <ul>
            {
                registryData.map((item, index) => {
                    return (
                        <li key={index}><span>{item}</span>
                            <button name="delete" id="delete" onClick={()=>removeItem(index)}>Remove</button>
                            <button onClick={()=>editItem(index)}>Update</button>
                        </li>
                    )
                })
            }
            </ul>
        </div><Link to="/" className="link">Go to Home Page...</Link></>
    )
}

export default Registry;