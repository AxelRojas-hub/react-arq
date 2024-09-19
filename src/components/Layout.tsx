import {Outlet} from "react-router-dom"
import {SearchForm} from '../components/SearchForm'

function Layout () {
    return (
    <div>
        <SearchForm ></SearchForm>
        <Outlet ></Outlet>
    </div>
    );
}

export { Layout };