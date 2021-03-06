import {Route, Switch} from "react-router-dom";
import logo1 from "./images/1.png";
import logo2 from "./images/2.png";
import logo3 from "./images/3.png";

const Images = () => {
    return(
        <Switch>
            <Route path={"/PIWO_Lab6/"} exact>
                <img src={logo1}/>
            </Route>
            <Route path={"/PIWO_Lab6/students"}>
                <img src={logo2}/>
            </Route>
            <Route path={"PIWO_Lab6/add_student"}>
                <img src={logo3}/>
            </Route>
            <Route>
                <img src={logo1}/>
            </Route>
        </Switch>
    )
}

export default Images;