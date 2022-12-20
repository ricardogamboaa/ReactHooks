import { useForm } from "../../hooks/useForm"

export const TodoAdd = ( { onNewTodo } ) => {
    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo( { newTodo } );
    }
    
    const { 
        description, 
        formState, 
        onInputChange,
        onResetForm
    } = useForm({
        description: ''
    });
    
    return (
        <form onSubmit={ onFormSubmit }>
            <input type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange } />
            <button type="submit" 
                onClick={ onResetForm }
                className="btn btn-outline-primary mt-2">
                    Agregar</button>
        </form>
    )
}
    