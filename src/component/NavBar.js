import {NavLink} from "react-router-dom";
import {useState, useEffect} from 'react';
import {auth} from "../firebase";

const NavBar = () => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if(u){
                setUser(u);
            }else{
                setUser(null);
                console.log("user not logged");
            }
        });
        return () => unsubscribe;
    },[]);

    const logout = () => {
        auth.signOut();
    }

    if(user)
        return(
            <nav className={"topNav"}>
                <NavLink to = "/PIWO_Lab6/" exact>Strona glowna</NavLink>
                <NavLink to = "/PIWO_Lab6/students" >Lista studentow</NavLink>
                <NavLink to = "/PIWO_Lab6/add_student">Dodaj studenta</NavLink>
                <a>{user.displayName}</a>
                <a onClick={logout} href="PIWO_Lab6/login">Wyloguj</a>
            </nav>
        )
    return(
        <nav className={"topNav"}>
            <NavLink to = "/PIWO_Lab6/" exact>Strona glowna</NavLink>
            <NavLink to = "/PIWO_Lab6/students" >Lista studentow</NavLink>
            <NavLink to = "/PIWO_Lab6/login" >Zaloguj</NavLink>
            <NavLink to = "/PIWO_Lab6/register" >Zarejestruj</NavLink>
        </nav>
    )
}

export default NavBar;