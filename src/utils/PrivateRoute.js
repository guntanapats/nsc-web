// import { Route, Navigate } from 'react-router-dom'
import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({children, ...rest}) =>{
//     const authenticated = false
//     return(
//         <Route {...rest}>{!authenticated ? <Navigate to="/login" /> : children}</Route>
//     )
// }

function PrivateRoute({isLogged}){
    return isLogged ? <Outlet/> : <Navigate to="/Login"/>;
}
// const useAuth = () =>{
//     return false
// }

// const PrivateRoute=(props:any) =>{
//     const auth=useAuth()

//     return auth?<Outlet/>:<Navigate to ="/Login"/>
// }

export default PrivateRoute;