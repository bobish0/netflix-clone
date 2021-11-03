import React, {useState, useEffect} from "react";
import './Nav.css'



function Nav() {

    const [show, handleShow] = useState(false)
    

    //Add scroll listener(like vanilla js) for nav when u scroll down.
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => { // listener removed everytime scroll stops.
            window.removeEventListener("scroll", null);
        };

    }, []);


    return (
        <div className ={`nav ${show && "nav_black"}` }>
       <img 
       className="nav_logo"
       src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
       alt= "Netflix Logo"
       />

        <div className="nav_selects">  {/* Best practice is with ul and li-tags, but for this mockup, this solution will suffice.*/}
            <h5>Home</h5>
            <h5>Series</h5>
            <h5>Movies</h5>
            <h5>New and popular</h5>
            <h5>My list</h5>
       </div>

       <img 
       className="nav_avatar"
       src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
       alt= "Netflix Logo"

       
       />
      
   
        </div>
    )
}

export default Nav;
