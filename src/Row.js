import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importing font-awesome icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Setting up imported fa:s in variables.
const RightArrow = <FontAwesomeIcon size="2x" icon={faChevronRight} />
const LeftArrow = <FontAwesomeIcon size="2x" icon={faChevronLeft} />
 
// where we get the images from.
const base_url = "https://image.tmdb.org/t/p/original/"; 

function Row({ title, fetchUrl, isLargeRow }){
    const [movies, setMovies] = useState([]);   /* states are the varibles of components.*/
        /*an empty movies array*/

        // a snippet of code witch runs based on a specific condition/variable.
        useEffect(() => { 
            // if [] runs once when the row loads, and not again.     
            async function fetchData(){ 
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results);
            return request;
        }
            fetchData();
        }, [fetchUrl]); // fetchurl in here re-renders Useffect.
                // telling useEffect we are using fetchUrl that is outside the block.
   

     return(
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
             {/* several_row_posters */}
           
           
            {movies.map(movie => ( 
                <img 
                key={movie.id} //individual key makes it load a bit faster.
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} 
                />
            ))}
            </div>
                
            <div className='chevron_right'>
            <a>{RightArrow}</a>
            </div>    
            
        </div>
    )

}

export default Row;