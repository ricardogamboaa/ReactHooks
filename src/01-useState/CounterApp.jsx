import { useState } from "react"

export const CounterApp = () => {
    const [ state, setCounter ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = state;
    const onClickAdd = () => {
        setCounter({
            counter1: counter1 + 1,
            ...state 
        });
    }
    
    return (
        <>
            <h1>counter 1: { counter1 }</h1>
            <h1>counter 2: { counter2 }</h1>
            <h1>counter 3: { counter3 }</h1>
            <hr />
            <button className="btn" onClick={ onClickAdd }>+1</button>  
        </>
    )
    }
    