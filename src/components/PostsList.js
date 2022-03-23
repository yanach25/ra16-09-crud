import {useContext} from "react";
import PostsContext from "../PostsContext";
import formatDate from "../format-date";
import {Link} from "react-router-dom";

function PostsList() {
    const data = useContext(PostsContext);

    return (
        <>
                {data.posts?.map((item) => (
                    <Link to={`/posts/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <p className="card-text text-start">{formatDate(item.created)}</p>
                                <p className="card-text text-start">{item?.content}</p>
                            </div>
                        </div>
                    </Link>
                ))}
        </>
    );
}

export default PostsList;
