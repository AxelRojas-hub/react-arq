interface SearchResultProp {
    id:number,
    title:string,
    price:string,
    currency_id:string,
    img:string
    permalink: string
}

function SearchResultItem(props: SearchResultProp){
        return (
            <div className="search-result-item">
                <img className="search-result-item__img" src={props.img} alt={props.title} />
                <div className="search-result-item__data">
                <h1>{props.title}</h1>
                <h2>$ {props.price+props.currency_id}</h2>
                </div>
            </div>
        );
}


export { SearchResultItem };