import {Outlet} from "react-router-dom"


function Layout () {
    return (
    <div>
        <header>Header Layout</header>
        <Outlet ></Outlet>
        <footer>Footer Layout</footer>
    </div>
    );
}

export { Layout };