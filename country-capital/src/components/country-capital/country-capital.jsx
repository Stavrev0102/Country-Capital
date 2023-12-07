/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

export default function CountryCapital({data}){
    const country = Object.keys(data);
    const capital = Object.values(data);
    const [colorMap,setColorMap] = useState({})

    const options = [...country,...capital]
    
    options.sort(() => Math.random() - 0.5)
    console.log(options);
    return (
        <div>
            {options.map((option) => (
                // eslint-disable-next-line react/jsx-key
                <button 
                className={`${colorMap[option] === 'SELECTED' ? "selected" : "" }`}
                onClick={() => {
                    setColorMap({
                        ...colorMap,
                        [option]:'SELECTED'
                    })
                }}
                >{option}</button>
            ) )}
        </div>
    )
}