import { TodoItem } from "./TodoItem"

export const TodoList = ( { todos } ) => {
  return (
    <ul className="list-group">
        {
            todos.map(item => <TodoItem key={ item.id } item={ item.description } />)
        }
    </ul>
  )
}
