import './Platform.css';
export default function Platform({platform}){
return(<div className='platform'>
    Plataformas: <hr/>
    {platform.map(e=>{
       if(typeof e ==="string"){return <label key={e}>{e}</label>}  
       else{return <label key={e.name}>{e.name}</label>} 
    })}
</div>);
}

 