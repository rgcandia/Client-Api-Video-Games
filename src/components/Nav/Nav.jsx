
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getGameName} from '../../redux/action/index.js';
import Loader from '../Loader/Loader.jsx';
import './Nav.css'
import Button from '../Button/Button.jsx'
function Nav(){
    const {currentGames} = useSelector(state=>state);
    const dispatch = useDispatch();
    const [loader,setLoader] = useState(false);
    const [search,setSearch] = useState("");
    function handleInput(e){
        setSearch(e.target.value)
    }
    function buttonHandler(){
        
        setLoader(true);
        getGameName(search,dispatch)
       
        
    }
    useEffect(()=>{
    // {currentGames&&setLoader(false)}
    setLoader(false)
    },[currentGames]);
    return <div className='nav'>
       

        <input name='game' value={search} onChange={(e)=>{handleInput(e)}} placeholder="Busca un Video Juego . . ."></input>
        <Button texto='Buscar' buttonHandler={buttonHandler}/>
       
        
        {loader&&<Loader/>}
    </div>
}
export default Nav;