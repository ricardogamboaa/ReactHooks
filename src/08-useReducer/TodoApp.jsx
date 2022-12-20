import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoAdd, TodoList } from './components';

export const TodoApp = () => {
    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar la gema del alma',
            done: false
        },
        {
            id: new Date().getTime() * 3,
            description: 'Recolectar la gema de la realidad',
            done: false
        }
    ];

    const handleNewTodo = ( newTodo ) => {
        console.log( newTodo );
    }

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );
    
    return (
        <>
            <h1>TodoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />
            
            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } /> 
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>


        </>
    )
}
    