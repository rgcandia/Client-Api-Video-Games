import './Card.css';
import Genres from '../Genres/Genres.jsx';
import { Link } from 'react-router-dom';
function Card ({name,background_image,genres,id}){


    // function handlerEvent(e){
    
    //     getGameId(id,dispatch);
        
    // }
    return (
        <div className="card" >  
        
            <Link to={`/details/${id}` }>
            <img alt='Imagen' src={background_image}/>    
            <h1>{name.toUpperCase()}</h1>
            </Link>

         
           
           <Genres genres={genres}/>
        </div>
    );
}
export default Card;