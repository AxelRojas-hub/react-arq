import { useEffect } from "react";
import {Link, useParams} from "react-router-dom"

function Search () {
    //Recibe el segmento despues de /:busqueda
    const params = useParams(); 
    
    //Escucha los cambios de los params
    useEffect(()=>{
        console.log("fetch desde params", params.busqueda);
    },[params]);
    
    return (
    <div>
        <h1>Search</h1>
        <Link to={"/"}>Link a Home</Link>
    </div>
    );
}

export { Search };