import './Landing.css'
import {  useNavigate } from 'react-router-dom'
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {getGames, getGenres} from '../../redux/action/index.js';
// import Loader from '../Loader/Loader';
import Button  from '../Button/Button';
export default function Landing(){
    const navigate = useNavigate();
    //  const dispatch = useDispatch();
    //  const {filter} = useSelector(state=>state);
//      useEffect(()=>{
 
//        getGames(dispatch)
//        getGenres(dispatch)     
//  },[dispatch]);
 function buttonHandler(){navigate('/home')}
    return(
        
        <div className='landing'>
            <h1>Bienvenidos a mi API Games</h1>
            {/* {!filter&&<Loader/>} */}
            
            {/* {filter&&<Button texto='INGRESAR' buttonHandler={buttonHandler}/>} */}
            <Button texto='INGRESAR' buttonHandler={buttonHandler}/>
        </div>
    )
} 