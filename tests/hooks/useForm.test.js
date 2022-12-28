import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('testing on useForm hook', () => { 
    
    const initialForm = {
        name: 'Ricardo',
        email: 'ricardo@google.com'
    };
    
    test('should return default values', () => { 
        const { result } = renderHook( () => useForm( initialForm ) );
        
        expect( result.current ).toEqual( {
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        } );
    });
    
    test('should change the name in form', () => { 
        const newValue = 'Juan';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange } = result.current;
        
        act( () => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
        });
        
        expect( result.current.name ).toBe( newValue );
        expect( result.current.formState.name ).toBe( newValue );
    });
    
    test('should change reset the form', () => { 
        const newValue = 'Juan';
        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, onResetForm } = result.current;
        
        act( () => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            });
            onResetForm();
        });
        
        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    });
    
});