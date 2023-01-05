import { useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import Card from '../Card/Card.jsx';
// import Loader from '../Loader/Loader.jsx';
import Cards404 from '../404/Cards404.jsx';
import './Cards.css'
// import {setPaginaActual} from '../../redux/action/index.js'
function Cards(){
const dispatch = useDispatch();
const{ currentGames,filter}  = useSelector(store=>store);
useEffect(()=>{
  // dispatch(setPaginaActual(1))  
  
},[filter,dispatch])

    return <div className='cards'>
            {Array.isArray(currentGames)&&currentGames.length===0?<Cards404 text='No hay videojuegos en esta p'/>:null}
           {!currentGames&&<Cards404 text='No se encontraron Video Games con ese nombre'/>} 
            {currentGames&&currentGames.map(e=>{
                return <Card key={e.id} name={e.name} 
                background_image={e.background_image}
                genres={e.genres}
                id={e.id}
                />
            })}
            
            
    

    </div>
}
export default Cards;