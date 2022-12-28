import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('testing <HomePage /> component', () => { 
    const user = {
        id: 1,
        name: 'Ricardo'
    }
    
    test('should show home page without user', () => { 
    
        render(<UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>);
        
        const preElement = screen.getByLabelText('pre');
        expect( preElement.innerHTML ).toBe( 'null' );
    });
        
    test('should show the component with the user', () => { 
        render(<UserContext.Provider value={{ user }}>
            <HomePage />
        </UserContext.Provider>);
    
        const preElement = screen.getByLabelText('pre');
        expect( preElement.innerHTML ).toContain( `${user.id}` );
        expect( preElement.innerHTML ).toContain( user.name );
    });
});