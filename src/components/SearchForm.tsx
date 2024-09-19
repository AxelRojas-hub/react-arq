/* eslint-disable @typescript-eslint/no-explicit-any */
import {useNavigate} from 'react-router-dom'
function SearchForm (){
        const navigate = useNavigate();
        const handleSubmit = (e:any)=>{
            e.preventDefault();
            const query = e.target.query.value;
            navigate("/search/"+query,{replace:true})
            e.target.reset()
        }
    return <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="query" className="search-form__input" required placeholder='Hace tu busqueda!'/>
        <button className="search-form__button">Buscar</button>
    </form>
}


export { SearchForm };