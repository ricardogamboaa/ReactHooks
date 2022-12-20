import { useCounter } from "../hooks/useCounter"



export const CounterWithCustomHook = () => {
    const { 
        counter, 
        addCounter,
        resetCounter,
        substractCounter 
    } = useCounter( 0 );
    
    return (
        <>
        <h1>Counter With Custom Hook: { counter }</h1>
        <hr />
        
        <button className="btn btn-primary" onClick={ addCounter }>+1</button>
        <button className="btn btn-primary" onClick={ resetCounter }>Reset</button>
        <button className="btn btn-primary" onClick={ substractCounter }>-1</button>
        </>
    )
}
    