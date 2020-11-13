import React, { useState } from 'react';
import Error from './Error';

const Form = ({ saveSearch }) => {

    // Define the states
    const [ term, saveTerm ] = useState('');
    const [ error, saveError ] = useState(false); 

    const searchImage = e => {
        e.preventDefault();

        // Validation
        if(term.trim() === ''){
            saveError(true);
            return;
        }

        saveError(false);

        // Send term to main component
        saveSearch(term);
    }

    return ( 
        <form
            onSubmit={searchImage}
        >
            <div className="container">
                <div className="row">
                    <div className="form-group col-md-8">
                        <input 
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Escribe lo que deseas buscar, ejemplo: auto o casa"
                            onChange={ e => saveTerm(e.target.value) }
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <input 
                            type="submit"
                            className="btn btn-primary btn-block btn-lg button"
                            value="Buscar"
                        />
                    </div>
                </div>
            </div>
            { error ? <Error message="Ingresá un término de búsqueda válido" /> : null }
        </form>
     );
}
 
export default Form;