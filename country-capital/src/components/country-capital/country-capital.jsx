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

    const [selected,setSelected] = useState(undefined);
    const isGameOver = options.length === 0;

    if(isGameOver) {
       return <h1>Congratulations!</h1>
    }
    
    return (
        <div>
            {options.map((option) => (
                // eslint-disable-next-line react/jsx-key
                <button 
                className={option.state === 'SELECTED' ? "selected" : option.state === 'WRONG' ? 'wrong' : '' }
                key={option.value}
                onClick={() => {
                    if(!selected){
                        setSelected(option)
                        setOptions(
                            options.map((opt) => {
                            return opt === option 
                            ? {
                                ...opt,
                                state:'SELECTED'
                            } 
                            : {...opt,state:'DEFAULT'};
                        })
                        )
                    } else {
                        if(selected.value === data[option.value] || data[selected.value] === option.value) {
                            setOptions(
                                options.filter((opt) => {
                                    return !(
                                        opt.value === selected.value || opt.value === option.value
                                    )
                                })
                            )
                        } else {
                            //wrong combination
                            setOptions(
                                options.map((opt) => {
                                    return (
                                        opt.value === selected.value || opt.value === option.value
                                    ) ? {...opt,state:'WRONG'} 
                                    :opt
                                })
                            )
                        }
                        setSelected(undefined)
                    }
                    
                }}
                >{option.value}</button>
            ) )}
        </div>
    )
}