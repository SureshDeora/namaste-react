import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import {useParams} from "react-router";

const ResMenu = () => {
    const [resData, setResData] = useState([])
    const {resId} = useParams();
    // console.log(resId);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        try {
            const data = await fetch(MENU_URL+resId);
            // console.log(MENU_URL+resId)
            const json = await data.json();
            console.log(json.data)
            
        } catch (error) {
            console.error(error)
        }
    
    }
    return (
        <div>
            <h1>Restaurant Menu</h1>
            <h2>Recommended</h2>
        </div>
    )
}
export default ResMenu;