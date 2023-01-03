import './Button.css'
export default function Button ({texto,buttonHandler}){

    
    return<div className='button' onClick={()=>{buttonHandler(texto)}}>
       
       <h3 className='texto'>{texto}</h3>
       
            </div>
}