import React from 'react';

const Error = ({ message }) => {
    return ( 
        <p className="error bg-danger text-center text-light">
            <img src="assets/error.png" className="img-error" alt="Error" />
         {message}</p>
     );
}
 
export default Error;
