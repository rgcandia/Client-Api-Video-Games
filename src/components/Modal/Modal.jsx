import './Modal.css';
import { useDispatch,useSelector } from 'react-redux';
import {setModal} from '../../redux/action/index.js';
import GenresButton from '../GenresButton/GenresButton';
export default function Modal(){
    const dispatch = useDispatch();
    const {genres} = useSelector(state=>state);
    function handleButton(){
        dispatch(setModal(false));
    }
    return (<div className='modal'>
        
       
        <button onClick={handleButton}>X</button>
        <h1 className='texto'>Filtra por Género</h1>
        <GenresButton genres={genres}/>
    </div>);
}
