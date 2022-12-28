import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/components/TodoItem";

describe('TODO item testing', () => { 
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }
    
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    
    beforeEach( () => { jest.clearAllMocks() })
    
    test('should show pending todo', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock } 
            /> 
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe( 'list-group-item d-flex justify-content-between' );
            
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        expect( spanElement.className ).toContain('align-self-center');
    });

    test('should show completed todo', () => { 
        todo.done = true;
        
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock } 
            /> 
        );
            
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        expect( spanElement.className ).toContain('align-self-center');
    });

    test('should call toggle when span is clicked', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('should call delete when button is clicked', () => { 
        render( 
            <TodoItem 
                todo={ todo } 
                onDeleteTodo={ onDeleteTodoMock }
                onToggleTodo={ onToggleTodoMock } 
            /> 
        );

        const btnElement = screen.getByRole('button');
        fireEvent.click( btnElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
});