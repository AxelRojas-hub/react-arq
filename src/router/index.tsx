import{Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Layout } from '../components/Layout'
import { Item } from '../pages/Item'
import {SearchResults} from '../pages/SearchResults'
export default function AppRoutes(){
    return (
    <Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>}/>
                <Route path="/search/:query" element={<SearchResults/>}/>
                <Route path="/item/:id" element={<Item/>}/>
            </Route>
    </Routes>
    )
}
export {AppRoutes}