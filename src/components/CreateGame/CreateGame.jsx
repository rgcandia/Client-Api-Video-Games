import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Button from '../Button/Button';
import './CreateGame.css'
import swal from 'sweetalert';
import { useSelector } from 'react-redux';

export default function CreateGame(){
    const {allGames} = useSelector(state=>state);
    const URL_SERVER = 'https://server-api-video-game-production.up.railway.app'
    // const URL_SERVER = 'http://localhost:3001'
    const navigate = useNavigate()
    const platforms = ["PC","PlayStation","Xbox","iOS","Android","Apple Macintosh","Linux","Nintendo","Atari","Commodore / Amiga","SEGA","3DO","Neo Geo","Web"];

    const genres = ["Action","Indie","Adventure","RPG","Strategy","Shooter",	"Casual","Simulation","Puzzle","Arcade","Platformer","Racing","Massively Multiplayer","Sports","Fighting","Family","Board Games","Educational","Card"];
    const  [form,setForm]= useState({name:'',released:'',description:'',image:'',platforms:[],genres:[],rating:[]});

    const  [error,setError]= useState({});

    const handleForm =(e)=>{
        const {name,value} = e.target;
        setForm({...form,[name]:value})
    }



    const handlePlatforms = ()=>{
        const select = document.getElementById("select-platforms");
        const selected = [...select.selectedOptions].map(option=>option.value)
        setForm({...form,platforms:selected})
        
    }
    const handleGenres = ()=>{
        const select = document.getElementById("select-genres");
        const selected = [...select.selectedOptions].map(option=>option.value)
        setForm({...form,genres:selected})
        

     
    }
    const buttonHandler = ()=>{navigate('/home')}
    
    const repeatedName=(name)=>{
        return allGames.some((games)=>{
            return games.name===name;
        }); 
    }

    const handleSubmit = (e)=>{
        
        e.preventDefault();
    
        const msjOk= {
            title: "Buen Trabajo!",
            text: "Juego Creado Correctamente",
            icon: "success",
            button: "ok",
          }
        const msjError= {
            icon: 'error',
            title: 'Oops...',
            text: 'Complete los campos requeridos',
           
          } 
        const  msjRepeatedName = {
            icon: 'error',
            title: 'Oops...',
            text: 'Ese nombre ya fué utilizado',
           
        }  
        
       if (Object.entries(error).length === 0) {
           repeatedName(form.name)?swal(msjRepeatedName): 
           fetch(`${URL_SERVER}/videogames`,{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type': 'application/json'
            }
           })
           .then(response=>{swal(msjOk).then(e=>{
            navigate('/home');
            window.location.reload();
        })})
           .catch(error=>{console.log('error de conexion'+error)})
           
          }else{
            swal(msjError)
            
          }
          
    }

    const handleError =()=>{
     
           
            if(form.name===''){setError({...error,name:'Campo nombre requerido'})}
              else if(form.description===''){setError({description:'Campo descripción requerido'})}
              else  if(form.platforms.length===0){setError({platforms:'Debe selecionar al menos una plataforma'})}
              else if (form.genres.length===0){setError({genres:'Debe Selecionar al menos un género'})}
              else {setError({})}
      
     
    }
    const handleRating = (e)=>{
        const {options} = e.target;
        switch (options.selectedIndex) {
            case 0:
                setForm({...form,rating:[]})
                break;
            case 1:
                setForm({...form,rating:[{title:'exceptional',percent:100}]})
                break;
            case 2:
                setForm({...form,rating:[{title:'recommended',percent:100}]})
                break;
            case 3:
                setForm({...form,rating:[{title:'meh',percent:100}]})
                break;
            case 4:
                setForm({...form,rating:[{title:'skip',percent:100}]})
                break;
           
        
            default:
                setForm({...form,rating:[]})
                break;
        }
        
    }
    return(<div className='create-game'>
       
       <Button texto='Volver' buttonHandler={buttonHandler} ></Button>
        <form onSubmit={handleSubmit} id='formulario'>
        
            <label htmlFor='name'>Nombre:</label>
            <input type='text' id='name' name='name' onChange={handleForm} value={form.name} onBlur={handleError} autoFocus/>
            {error.name&&<p>{error.name}</p>}
            <br/>    
            <label htmlFor='released'>Fecha de lanzamiento:</label>
            <input type='date' id='released' name='released' onChange={handleForm} value={form.released}onBlur={handleError}/>
            <br/>   
            {/* <label htmlFor='description'>Descripción:</label> */}
            <textarea rows="10" cols="50" type='text' id='description' name='description' onChange={handleForm} value={form.description} placeholder='Descripción del video juego' onBlur={handleError}/>
            {error.description&&<p>{error.description}</p>}
           
            <hr/>
            <label htmlFor='image'>URL de la Imagen:</label>    
            <input type='text' id='image' name='image' onChange={handleForm} value={form.background_image}onBlur={handleError}/>
            <br/>
            <label htmlFor='platforms'>Platforms</label><br/>    
            <select id='select-platforms' name='platforms' multiple onChange={handlePlatforms} onBlur={handleError} >
              {platforms.map(e=>{
              return <option key={e} value={e}>{e}</option>})}
            </select> 
            {error.platforms&&<p>{error.platforms}</p>}
            <br/>    
           <label htmlFor='genres'>Genres</label><br/>
           <select id='select-genres' name='genres' multiple onChange={handleGenres} onBlur={handleError} >
             {genres.map(e=>{
                return <option key={e} value={e}>{e}</option>
             })}
            </select>
            {error.genres&&<p>{error.genres}</p>}
            <br/>
            <label>Rating</label><br/>
            <select id='select-rating' name='rating' onChange={handleRating} defaultValue='defecto'>
            <option value="defecto" >Selecione el Rating</option>    
            <option  value='exceptional'>Exceptional</option>
            <option  value='recommended'>Recommended</option>
            <option  value='meh'>Meh</option>
            <option value='skip'>Skip</option>
            </select><br/>

            <input type='submit' value='Enviar'/>
       </form>




    </div>);
}