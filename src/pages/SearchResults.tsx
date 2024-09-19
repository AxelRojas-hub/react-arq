import { useEffect, useState } from "react";
import { SearchResultItem } from "../components/SearchResultItem";
import { Link, useParams} from 'react-router-dom'

function SearchResults () {
  //Recibe el segmento despues de /:busqueda
  const params = useParams();
  const [results, setResults] = useState([]);

  async function pullRes(query:string){
    const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q="+query);
    const jsonData = await response.json();    
    setResults(jsonData.results)
  }

  //Escucha los cambios de los params
  useEffect(()=>{
    if (params.query){
      pullRes(params.query)
    }
  },[params]);
    

  return (
    <div>
        <div className="search-results">
          {results.map((r: { id: number,title: string; price: string; thumbnail: string, permalink: string; }) => (
            <Link  key={r.id} to={"/item/"+r.id}>
            <SearchResultItem
            id={r.id}
            title={r.title} 
            price={r.price}
            currency_id={r.sale_price.currency_id}
            img={r.thumbnail} 
            permalink={r.permalink}/>
            </Link>
        ))}
        </div>
    </div>
  );
}

export { SearchResults };