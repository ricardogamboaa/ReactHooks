import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('testing useCounter hook', () => { 
    test('should return default values', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, addCounter, resetCounter, substractCounter } = result.current;


        expect( counter ).toBe( 10 );
        expect( addCounter ).toEqual( expect.any( Function ) );
        expect( substractCounter ).toEqual( expect.any( Function ) );
        expect( resetCounter ).toEqual( expect.any( Function ) );
    });

    test('should generate a counter with value equal to 100', () => { 
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter } = result.current;

        expect( counter ).toBe( 100 );
    });

    test('should increment the counter', () => { 
        const { result } = renderHook( () => useCounter( 100 ) );
        const { addCounter } = result.current;

        act( () => {
            addCounter();
            addCounter( 2 );
        });
        expect( result.current.counter ).toBe( 103 );
    });

    test('should decrement the counter', () => { 
        const { result } = renderHook( () => useCounter( 100 ) );
        const { substractCounter } = result.current;

        act( () => {
            substractCounter();
            substractCounter( 2 );
        });
        expect( result.current.counter ).toBe( 97 );
    });

    test('should reset the counter', () => { 
        const { result } = renderHook( () => useCounter( 100 ) );
        const { substractCounter, addCounter, resetCounter } = result.current;

        act( () => {
            substractCounter( 2 );
            addCounter( 1000 );
            resetCounter();
        });
        expect( result.current.counter ).toBe( 100 );
    });
 })