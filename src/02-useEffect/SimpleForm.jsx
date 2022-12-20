import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'ricardo@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    };

    useEffect(() => {
    //   console.log( 'UseEffect Called!' );
    }, [ ]);
    
    useEffect(() => {
    //   console.log( 'Form changed!' );
    }, [ formState ]);
    
    useEffect(() => {
    //   console.log( 'Email changed!' );
    }, [ email ]);
    
    
    return (
        <>
        <h1>Simple Form</h1>
        <hr />
        
        <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username" 
            value={ username }
            onChange={ onInputChange } />
       
        <input 
            type="text" 
            className="form-control mt-2" 
            placeholder="ricardo@gmail.com" 
            name="email" 
            value={ email }
            onChange={ onInputChange } />

        {
            (username === 'strider2') && <Message />
        }
        </>
    )
}
    