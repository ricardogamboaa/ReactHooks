import { memo } from 'react'

export const Small = memo(( { value } ) => {
    console.log( "me volví a dubujar!" );
    return (
        <small>{ value }</small>
    )
})
    