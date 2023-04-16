import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />} >
                    {/* <Route index element={<>the home components will be here!</>}/>
                    <Route path='*' element={<>404 Not Found</>} /> */}
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
}
export default Router;