import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import AddOrEditPost from "./pages/AddOrEditPost";
import PostsProvider from "./PostsProvider";
import ViewCard from "./pages/ViewCard";

export default function App() {
    return (
        <PostsProvider>
            <Router>
                <div>
                    <div className="page">
                        <Routes>
                            <Route path="/" exact element={<Home/>} />
                            <Route path="/posts/new" exact element={<AddOrEditPost/>} />
                            <Route path="/posts/:id" exact element={<ViewCard/>} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </PostsProvider>
    );
}
