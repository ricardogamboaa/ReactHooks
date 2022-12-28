import { useCounter, useFetch } from "../hooks";
import { BBBlockQuote, LoadingQuote } from "./components";

export const MultipleCustomHooks = () => {
    const { counter, addCounter } = useCounter( 1 );
    const { data, isLoading, hasError } = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${ counter }` );
    const { author, quote } = !!data && data[0];
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ? 
                    <LoadingQuote /> 
                    :  <BBBlockQuote  author={ author } quote={ quote } />
            }
            <button 
                className="btn btn-primary" 
                disabled={ isLoading }
                onClick={ () => { addCounter() } }>
                    Next Quote
            </button>
        </>
    )
}
    