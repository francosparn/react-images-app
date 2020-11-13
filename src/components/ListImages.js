import React from 'react';
import Image from './Image';

const ListImages = ({ images }) => {
    return ( 
        <div className="card-columns mt-5">
            { images.map(image=> (
                <Image 
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
     );
}
 
export default ListImages;