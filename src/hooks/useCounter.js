import { useState } from "react";


export const useCounter = (initVal = 10) => {
    const [counter, setCounter] = useState( initVal );
    

    const addCounter = () => {
        setCounter( counter + 1 );
    }

    const resetCounter = () => {
        setCounter( initVal );
    }

    const substractCounter = () => {
        setCounter( counter - 1 )
    }

    return {
        counter,
        addCounter,
        resetCounter,
        substractCounter
    };
}