import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import { Gallery } from "../components/Gallery";

type picType={
    id:string,
    secure_url:string,
}
type ResType={
    id:string,
    pictures:picType[];
    title:string,
    price:string,
}
function Item () {    
    const params = useParams();
    const [results, setResults] = useState<ResType>();

    async function pullResults(q:string) {
        const response = await fetch("https://api.mercadolibre.com/items/"+ q)
        const data = await response.json();
        setResults(data)
    }

    useEffect(()=>{
        pullResults(params.id!)
    },[params])

    return (
    <div className="search-results">
    {results? (
    <div>
        <Gallery pics={results.pictures} showNav={false}></Gallery>
        <div className="search-results-data">
            <h1>{results.title}</h1>
            <h2>{results.price + results.currency_id}</h2>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, labore tempora nisi distinctio voluptatum minus cumque praesentium optio asperiores quisquam aspernatur eligendi eum saepe sed non voluptates veritatis, deleniti repellat.</p>
    </div>
    ):(
        <div className="spinner"></div>
    )}
    </div>
);
}


export { Item };