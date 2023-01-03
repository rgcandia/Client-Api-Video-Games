import './Platform.css';
export default function Platform({platform}){
return(<div className='platform'>
    Plataformas: <hr/>
    {platform.map(e=>{
       if(typeof e ==="string"){return <div key={e}>{e}</div>}  
       else{return <div key={e.name}>{e.name}</div>} 
    })}
</div>);
}

 