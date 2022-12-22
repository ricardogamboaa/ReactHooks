import React from 'react'
import { UserContext } from './UserContext'

const user = {
    id: 123,
    name: 'Ricardo',
    email: 'ricardo@google.com'
}

export const UserProvider = ( { children } ) => {
    return (
        <>
            <UserContext.Provider value={ 
                { 
                    hola: 'Mundo',
                    user
                } 
            }>
                { children }
            </UserContext.Provider>
        </>
    )
}
