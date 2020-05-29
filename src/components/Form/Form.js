import React from 'react'
import './Form.scss'
const Form = (props) => {


    
    return (
        <form className="search__container" onSubmit ={props.handlesubmit}>           
           <div className= "searchbar">
           <input 
            className="search_input"
            type='text'
            placeholder='country'
            name='country'  
            onChange={props.handlechange}                          
            />            
              <button className="search_icon" type="submit" ><i className="fas fa-search"></i></button>
           </div>
        </form>
    )
}

export default Form; 