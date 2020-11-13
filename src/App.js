import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form';
import ListImages from './components/ListImages';
import Footer from './components/Footer'

function App() {

  // Define states
  const [ search, saveSearch ] = useState('');
  const [ images, saveImages ] = useState([]);
  const [ actualpage, saveActualPage ] = useState(1);
  const [ totalpage, saveTotalPage ] = useState(1);

  useEffect(() => {
    const consultAPI = async () => {
      if(search === '') return;

      const imagesPerPage = 16;
      const key = '19008851-7b69a0f0837ac24488b783339';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualpage}`;

      const response = await fetch(url);
      const result = await response.json();

      saveImages(result.hits);

      // Calculate total pages
      const calculateTotalPages = Math.ceil(result.totalHits / imagesPerPage);

      saveTotalPage(calculateTotalPages);
    }

    // Move screen up
    const main = document.querySelector('.main');
    main.scrollIntoView({ behavior: 'smooth' })

    consultAPI();
  },[search, actualpage]);

  // Define previous page
  const previousPage = () => {
    const newActualPage = actualpage - 1; 

    if(newActualPage === 0) return;

    saveActualPage(newActualPage);
  }

  // Define next page
  const nextPage = () => {
    const newActualPage = actualpage + 1; 

    if(newActualPage > totalpage) return;

    saveActualPage(newActualPage);
  }

  return (
    <Fragment>
      <div className="main">
        <img src="assets/picture.png" className="logo" alt="Logo" />
        <h1 className="text-center text-light py-5">Images<span className="title">App</span></h1>
        <hr />
        <p className="text-center header-text">Tu aplicación de imágenes favorita</p>
      
        <Form 
          saveSearch={saveSearch}
        />
      </div>
      <div className="container">
        <ListImages 
          images={images}
        />
        <div className="row justify-content-center my-5">
          
          { (actualpage === 1) ? null : (
            <button
            type="button"
            className="btn btn-primary mr-3 btn-lg"
            onClick={previousPage}
            >&laquo; Anterior</button>
          )
          }

          { (actualpage === totalpage) ? null : (
            <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={nextPage}
            >Siguiente &raquo;</button>
          )
          }

        </div>
        <Footer 
          name="Franco Sparn"
        />
      </div>
    </Fragment>
  );
}

export default App;
