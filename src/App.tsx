import {Link} from "react-router-dom"

function App () {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/Page2">Link pagina 2</Link><br />
        <Link to="/pagAparte">Link pagina aparte</Link>
      </div>
    );
}

export { App };