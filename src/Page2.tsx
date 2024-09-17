import {Link} from "react-router-dom"

function Page2 () {
    return (
      <div>
        <h1>Pagina2</h1>
        <Link to={"/"}>Link a Home</Link>
      </div>
    );
}

export { Page2 };