// set localstorage flag to true
import { useContext } from "react";
import { curUserContext } from "../context/curUserContext";

const useCurUser = () => {

    return useContext(curUserContext)

}
export default useCurUser;