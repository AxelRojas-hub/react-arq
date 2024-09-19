import{Routes, Route} from 'react-router-dom'
import { App } from '../pages/App'
import { Page2 } from '../pages/Page2'
import { Layout } from '../components/Layout'
import { Search } from '../pages/Search'

export default function AppRoutes(){
    return (
    <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<App/>}/>
                <Route path="page2" element={<Page2/>}/>
            </Route>
            <Route path="/search/:busqueda" element={<Search/>}/>
    </Routes>
    )
}
export {AppRoutes}