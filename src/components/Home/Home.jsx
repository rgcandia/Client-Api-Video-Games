import './home.css'
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav.jsx';
import Paginado from '../Paginado/Paginado';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {getGames,getGenres} from '../../redux/action/index.js';
import Loader from '../Loader/Loader.jsx';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';
import ModalRating from '../ModalRating/ModalRating';
 function Home(){
 const {filter,modal,modalRating} = useSelector((state)=>state);
 
 const dispatch = useDispatch();
 useEffect(()=>{
 
 getGames(dispatch);getGenres(dispatch) 

 },[dispatch]);

    return <div className='home'>
      
      {!filter&&<Loader/>}
      {filter&&<>
      {modal&&<Modal/>}
      {modalRating&&<ModalRating/>}
      <Nav/>
      <Filter/>
      <Paginado/>
      <Cards/>
      </>}  
    </div>
}
export default Home;