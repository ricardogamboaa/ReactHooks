import { TodoItem } from "./TodoItem"

export const TodoList = ( { todos, onDeleteTodo } ) => {
  return (
    <ul className="list-group">
        {
            todos.map(item => <TodoItem 
                        key={ item.id } 
                        todo={ item } 
                        onDeleteTodo={ id => onDeleteTodo( id ) } />)
        }
    </ul>
  )
}
