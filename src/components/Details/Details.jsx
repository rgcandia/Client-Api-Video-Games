import './Details.css';
import { useSelector} from 'react-redux'
import Genres from '../Genres/Genres';
import { useParams,useNavigate} from 'react-router-dom';
import {getGameId} from '../../redux/action/index.js';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import Button from '../Button/Button.jsx';
import Ratings from '../Ratings/Ratings';
import Platform from '../Platform/Platform';
function Details (){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {selectedGame} = useSelector(state=>state);
    const {id} = useParams();
   useEffect(()=>{
    getGameId(id,dispatch)
   },[dispatch]);
   function buttonHandler(){navigate('/home')}
    return (
        <div className='details' >
         {!selectedGame&&<Loader/>}   
         {selectedGame&&<>
          
             <Button texto='VOLVER' buttonHandler={buttonHandler}/>
            <h1 className='name'>{selectedGame.name.toUpperCase()}</h1>
            <div className='img'>  <img  alt='imagen' src={selectedGame.background_image}></img></div>
           
             {selectedGame.genres&&<Genres genres={selectedGame.genres}/>}
             
             <h3>Lanzamiento : {selectedGame.released} </h3>
             <div className='order'>
             {selectedGame.rating&&<Ratings ratings={selectedGame.rating}/>}
             {selectedGame.platforms&&<Platform platform={selectedGame.platforms}/>}
             </div>

             <div className='text'><hr/><p>{selectedGame.description}</p><hr/></div>   
             
             
             
         </>}
           
        </div>
    );
}
export default Details;


// Ruta de detalle de videojuego: debe contener

// [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
// [ ] Descripción
// [ ] Fecha de lanzamiento
// [ ] Rating
// [ ] Plataformas