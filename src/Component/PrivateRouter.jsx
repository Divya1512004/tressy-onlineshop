import { useContext } from "react";
import {Navigate} from "react-router-dom";
import { AppContext } from "../Context/AppContext";
function PrivateRouter({children}) {
    const {loggedIn}=useContext(AppContext);
    return loggedIn ? children : <Navigate to="/" replace/>
}
export default PrivateRouter;


