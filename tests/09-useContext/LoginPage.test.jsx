import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('testing on <LoginPage /> component', () => { 
    
    const user = {
        id: 1,
        name: 'Ricardo'
    };
    
    const setUserMock = jest.fn();
    
    test('should show the component without the user', () => { 
        render(
            <UserContext.Provider value={ { user: null } }>
            <LoginPage />
            </UserContext.Provider>
            );
            
            const preElement = screen.getByLabelText('pre');
            expect( preElement.innerHTML ).toBe( 'null' )
        });
        
        test('should call setUser when clicks the button', () => { 
            render(
                <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
                    <LoginPage />
                </UserContext.Provider>
                );
                
                const btnElement = screen.getByRole('button');
                fireEvent.click( btnElement )
                
                expect( setUserMock ).toHaveBeenCalledWith( {
                    "email": "ricardo@google.com",
                    "name": "Ricardo",
                    "id": 123,
                } );
            });
        })