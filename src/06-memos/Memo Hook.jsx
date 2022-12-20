import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ){
        console.log( 'Ahí vamos' );
    }
    return `${ iterationNumber } iterations releaced`
}


export const MemoHook = () => {
    const { counter, addCounter } = useCounter( 10 );
    const [show, setShow] = useState( true );

    const memorizedValue = useMemo(() => heavyStuff( counter ), [ counter ])

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button className="btn btn-primary"
                onClick={ addCounter } >+1</button>

            <button className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) } >
                    Show/Hide { JSON.stringify( show ) }
                </button>
        </>
    )
}
    