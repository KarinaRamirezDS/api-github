import React from "react";
import { Link } from "react-router-dom";
//Styles
import "./GithubUser.styles.css";

const GithubUser = props => {


  const {
    avatar,
    github,
    github_name,
    name,
    public_repos,
    followers,
    following,
    biografia
  } = props;

  return (
    <div className="contenido">
      <div className="card ">
      <div className="">
        <img src={avatar} alt={github} className="" />
        <h1>Username: {github_name}</h1>
        
      </div>
      

      <div className="">
      <h2 >{biografia}</h2>
        <p>
        <Link to={`/repos/${github_name}`}>
          <span className=" bg-green-800"> Repositorios </span>{" "}
          {public_repos}
          </Link>
        </p>
        <p>
          <Link to={`/followers/${github_name}`}>
            <span className=" bg-green-800"> Followers </span>{" "}
            {followers}
          </Link>
        </p>
        <p>
        <Link to={`/following/${github_name}`}>
          <span className=" bg-green-800"> Following </span>{" "}
          {following}
          </Link>
        </p>
      </div>
     
      </div>
    </div>
  );
};

export default GithubUser;
