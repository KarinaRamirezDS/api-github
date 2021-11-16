import React, {  useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubFollowings from "../../Components/Custom/GithubFollowings/GithubFollowings";




//Components

import Loader from "../../Components/Custom/Loader/Loader";



const Following = () => {
    //Hooks
    const { user } = useParams();
    //console.log(user);
    
   //State
   const [followings, setFollowings] = useState([]);
   const [loader, setLoader] = useState(false);


    //useEffect
     useEffect(() => {

    setFollowings([]);
    setLoader(true);
    const handleUserFollowing = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user}/following`
      );
      const result = await response.json();
      setFollowings(result);
      console.log(result);
    };
    handleUserFollowing();
    setLoader(false);
  }, [user]);



    return (
        <div>
            <h2>Following</h2>

            {followings && followings.length > 0 && !loader ? (
            followings.map(user => (
            <GithubFollowings
            avatar={user?.avatar_url ? user.avatar_url : null}
            
            github={user?.html_url}
            github_name={user?.login}
        
          />
        ))
      ) : (
        <Loader />
      )}
        </div>
    )
}

export default Following
