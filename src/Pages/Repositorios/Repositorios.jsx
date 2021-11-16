import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubRepositorios from "../../Components/Custom/GithubRepositorios/GithubRepositorios";
import Loader from "../../Components/Custom/Loader/Loader";


const Repositorios = () => {

    //Hooks
  const { user} = useParams();
  //console.log(user)

   //State
   const [repositorios, setRepositorios] = useState([]);

   const [loader, setLoader] = useState(false);

    //useEffect
  useEffect(() => {
    setLoader(true);
    const handleUserRepositorios = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const result = await response.json();
      setRepositorios(result);
      console.log(result);
    };
    handleUserRepositorios();
    setLoader(false);
  }, [user]);



    return (
        <div>
            <h2>Repositorios</h2>
            {repositorios && repositorios.length > 0 && !loader ? (
            repositorios.map(user => (
          <GithubRepositorios
            avatar={user?.avatar_url ? user.avatar_url : null}
            
            github_name={user?.repos_url}
            name={user?.name}
             
            description={user?.description}
            giturl={user?.git_url}


          />
        ))
            ) : (
            <Loader /> 
            )}
        </div>
    );


};

export default Repositorios
