import { useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import Card from '../Card/Card.jsx';
import Loader from '../Loader/Loader.jsx';
import './Cards.css'
import {setPaginaActual} from '../../redux/action/index.js'
function Cards(){
const dispatch = useDispatch();
const{ currentGames,filter}  = useSelector(store=>store);
useEffect(()=>{
  dispatch(setPaginaActual(1))  
  
},[filter])

    return <div className='cards'>
           
            {!currentGames&&<Loader/>} 
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