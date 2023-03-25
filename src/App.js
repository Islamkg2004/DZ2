import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Post from "./componets/post/Post";
import PostPage from "./pages/postPage/Postpage";
import Layout from "./componets/layout/Layout";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<MainPage/>}/>
                </Route>
                <Route path='/post' element={<PostPage/>}/>
                <Route path='/post/:id' element={<Post/>}/>
                <Route path='*' element={<h2 style={{textAlign:"center"}}>404 not found</h2>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;