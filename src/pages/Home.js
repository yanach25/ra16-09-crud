import {Link} from "react-router-dom";
import PostsList from "../components/PostsList";

function Home() {
    return (
        <div className="App">

            <div className="d-flex justify-content-end">
                <Link to="/posts/new">
                    <button type="button" className="btn btn-primary mb-3">Добавить пост</button>
                </Link>
            </div>
            <div>
                <PostsList/>
            </div>
        </div>
    )
}

export default Home;
