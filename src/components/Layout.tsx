import {Outlet,Link} from "react-router-dom"
import {SearchForm} from '../components/SearchForm'

function Layout () {
    return (
    <div>
        <Link to="/">🏠</Link>
        <header>
            <SearchForm />
        </header>
        <Outlet />
    </div>
    );
}

export { Layout };