import formatDate from "../format-date";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext, useState} from "react";
import PostContext from "../PostsContext";
import axios from "axios";
import AddOrEditPost from "./AddOrEditPost";

function ViewCard() {
    const [editMode, setEditMode] = useState(false);
    const data = useContext(PostContext);
    let { id } = useParams();
    const navigate = useNavigate();

    if (!data.posts) {
        return  null;
    }

    const card = data.posts.find((item) => item.id.toString() === id);

    const handleDelete = () => {
        axios.delete(`/posts/${id}`, ).then(() => {
            data.setPosts([]);
            navigate('/');
        })
    }

    const handleOnEdit = (event) => {
        event.preventDefault();
        setEditMode(true);
    }

    const closeEdition = () => {
        setEditMode(false);
    }

    return editMode
        ? (<AddOrEditPost card={card} closeEdition={closeEdition} />)
        : (
            <div className="card mb-3 view-card">
                <div className="text-end">
                    <Link to="/">
                        <button type="button" className="btn btn-link">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                 fill="#000000">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="card-text text-start">{formatDate(card?.created)}</p>
                    <p className="card-text text-start">{card?.content}</p>
                </div>
                <div className="text-end button-group m-3">
                    <a href="#" className="btn btn-danger" onClick={handleDelete}>Удалить</a>
                    <a href="#" className="btn btn-primary" onClick={handleOnEdit}>Редактировать</a>
                </div>
            </div>
        );
}

export default ViewCard;
