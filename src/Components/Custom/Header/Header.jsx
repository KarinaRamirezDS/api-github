import React from "react";

import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


//Styles
import "./Header.styles.css";


const Header = () => {
  return (
    <header className="h-16 bg-blue-900 flex justify-between items-center mi-clase">
      <h2 className="ml-10 text-2xl tablet:text-3xl	text-white"><FontAwesomeIcon icon={faGithub}/>  Github API</h2>
      <p className="mr-10 text-white block tablet:hidden">Menu</p>
      
    </header>
  );
};

export default Header;
