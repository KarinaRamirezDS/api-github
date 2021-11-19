import React, { useState } from "react";

//Components
import UserForm from "../../Components/Home/Form/UserForm";
import GithubUser from "../../Components/Custom/GithubUser/GithubUser";
import Loader from "../../Components/Custom/Loader/Loader";
import Error from "./Error";
const Home = () => {
  //State
  const [userName, setUserName] = useState("");
  const [userInformation, setUserInformation] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false)

  //Funciones
  const handleUserName = ({ value }) => {
    setUserName(value);
  };

  const handleSearchUser = async e => {
    e.preventDefault();
    setUserInformation(null);
    setLoader(true);

    setError(true)
    try{
    const API = `https://api.github.com/users/${userName}`;
    const response = await fetch(API);
    const result = await response.json();
   // console.log(result);
   
    //setUserInformation(result);
    setLoader(false);
    if(result.message){
      setError(true)
      
      
    }else {;
      setUserInformation(result)
      setLoader(false)
    }
      }catch(e){
        setLoader(false)

}
    
  };

  return (
    <div className="">
      <UserForm
        handleUserName={handleUserName}
        handleSearchUser={handleSearchUser}
      />
  
     

      <div className="text-center w-3/4 md:w-7/12">
      
        {userInformation  ? (
          <GithubUser
            avatar={userInformation?.avatar_url}
            github={userInformation?.html_url}
            github_name={userInformation?.login}
            name={userInformation?.name}
            public_repos={userInformation?.public_repos}
            followers={userInformation?.followers}
            following={userInformation?.following}
            biografia={userInformation?.bio}
          />
        ): <Error message={error} />}
      </div>

      {loader && <Loader />}

    </div>
  );
};

export default Home;
