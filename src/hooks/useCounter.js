import { useState } from "react";


export const useCounter = (initVal = 10) => {
    const [counter, setCounter] = useState( initVal );
    

    const addCounter = ( value = 1 ) => {
        setCounter( (current) => current + value );
    }

    const resetCounter = () => {
        setCounter( initVal );
    }

    const substractCounter = ( value = 1 ) => {
        setCounter( (current) => current - value );
    }

    return {
        counter,
        addCounter,
        resetCounter,
        substractCounter
    };
}