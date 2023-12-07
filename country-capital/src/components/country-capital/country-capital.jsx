/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

export default function CountryCapital({data}){
    const country = Object.keys(data);
    const capital = Object.values(data);


    const [options,setOptions] = useState([...country,...capital].map((value) => ({
        value,
        state:'DEFAULT'
        }))
        .sort(() => Math.random() - 0.5)
    )
    
    // options.sort(() => Math.random() - 0.5)
    console.log(options);
    return (
        <div>
            {options.map((option) => (
                // eslint-disable-next-line react/jsx-key
                <button 
                className={option.state === 'SELECTED' ? "selected" : "" }
                onClick={() => {
                    setOptions(
                        options.map((opt) => {
                        return opt === option 
                        ? {
                            ...opt,
                            state:'SELECTED'
                        } 
                        : opt;
                    })
                    )
                }}
                >{option.value}</button>
            ) )}
        </div>
    )
}