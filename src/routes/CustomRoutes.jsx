
import { Routes , Route } from "react-router-dom"
import HomePage from '../components/HomePage'
import Quiz from '../components/Quiz'
import Layout from "../components/Layout"
export default function CustomRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/startquiz" element={<Quiz/>} />
            <Route path="/profile" element={<Layout/>} />
        </Routes>
    )
}