import React from 'react'
import { useHistory } from "react-router-dom";

import "./GithubRepositorios.styles.css"
const GithubRepositorios = prop => {

  //hooks router
  const history = useHistory();
//Funciones
     const handleHistory = () => {
       history.goBack();
       };

    const {
      avatar,
      
      github_name,
      name,
      
      description,
      giturl
    } = prop;
  
    return (
      <div className="contenido">
      
        <div className="card ">
        <div className="">    
        <h2>Nombre proyecto: {name}</h2>
       
        <h2>Descripción: {description}</h2>
        <a href={giturl} >Direccion url:{giturl}</a>
        </div>
        </div>
        <button className="input" onClick={handleHistory}>Regresar</button>
      </div>
      
    );
  };
  
 

export default GithubRepositorios
