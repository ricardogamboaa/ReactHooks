import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch  } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('testing on <MultipleCustomHooks /> component', () => {
    
    const mockIncrement = jest.fn();
    const counter = useCounter.mockReturnValue({
        counter: 1,
        addCounter: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    } );

    test('should show default component', () => { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        
        expect( screen.getByText('Loading...') )
        expect( screen.getByText('Breaking Bad Quotes') );
        
        const nextBtn = screen.getByRole('button', { name: 'Next Quote'} );
        // screen.debug();
        expect( nextBtn.disabled ).toBeTruthy();
    });
    
    test('should show a new quote', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Ricardo', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        // screen.debug();
        expect( screen.getByText( 'Hola Mundo' ) ).toBeTruthy();
        expect( screen.getByText( 'Ricardo' ) ).toBeTruthy();

        const nextBtn = screen.getByRole('button', { name: 'Next Quote'} );
        expect( nextBtn.disabled ).toBeFalsy();
    });

    test('should call addCounter function', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Ricardo', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });
        
        render(<MultipleCustomHooks />);
        const nextBtn = screen.getByRole('button', { name: 'Next Quote'} );
        fireEvent.click( nextBtn );

        expect( mockIncrement ).toHaveBeenCalled();
     })
});