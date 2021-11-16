import React from "react";
import { Link, useHistory } from "react-router-dom";

//Styles

const GithubFollowings = props => {


  const history = useHistory();
  //Funciones
       const handleHistory = () => {
         history.goBack();
         };
  const {
    avatar,
    github,
    github_name,
    name,
    public_repos,
    biografia
  } = props;

  return (
    <div className="contenido">
      <div className="card justify-center">
     
        <img src={avatar} alt={github} className="" />
        <h1>Username: {github_name}</h1>
        <h1>Nombre: {name}</h1>
      
      

      <div className="justify-items-center justify-center">
      <h2 >{biografia}</h2>
        <p>
        <Link to={`/repos/${github_name}`}>
          <span className="bg-green-800"> Repositorios </span>{" "}
          {public_repos}
          </Link>
        </p>
      </div>
      <button className="input" onClick={handleHistory}>Regresar</button>
      </div>
      
    </div>
  );
};

export default GithubFollowings;
