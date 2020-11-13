import React from 'react';

const Image = ({ image }) => {

    // Extract variables
    const { largeImageURL, likes, views, downloads, favorites, tags } = image;

    return ( 
        <div className="card">
                <img src={largeImageURL} alt={tags} className="card-img-top" />

                <div className="card-body text-center">
                        <p className="card-text">
                            <img src="assets/like.png" className="img-stats" alt="Me Gusta" /> <b>{likes}</b> me gusta
                        </p>
                        <p className="card-text">
                            <img src="assets/star.png" className="img-stats" alt="Favoritos" /> <b>{favorites}</b> favoritos
                        </p>
                        <p className="card-text">
                            <img src="assets/download.png" className="img-stats" alt="Descargas" /> <b>{downloads}</b> descargas
                        </p>
                        <p className="card-text">
                            <img src="assets/views.png" className="img-stats" alt="Vistas" /> <b>{views}</b> vistas
                        </p>
                    <a 
                        href={largeImageURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg btn-block"
                    ><img src="assets/view.png" className="img-view" alt="Vista" /> Ver Imagen</a>
                </div>
            </div>
     );
}
 
export default Image;