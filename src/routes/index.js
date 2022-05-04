import { useEffect, useState } from "react"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

export const Routes = () => {
    const [auth, setAuth] = useState(false)
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("@Kenziehub") ) || ""
        if(!!token){
            return (setAuth(true));
        }
    }, [auth])
    return(
        <Switch>
            <Route path="/home"><Home auth={auth}  setAuth={setAuth} /></Route>
            <Route exact path="/"><Login setAuth={setAuth} auth={auth} /></Route>
            <Route path="/Register"><Register auth={auth} /></Route>
        </Switch>
    )
}