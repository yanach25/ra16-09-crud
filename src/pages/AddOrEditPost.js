import './AddOrEditPost.css'
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import PostContext from "../PostsContext";

function AddOrEditPost(props) {
    const {card, closeEdition} = props;

    const [input, setInput] = useState(card ? card.content : '');
    const handleOnChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }
    const navigate = useNavigate();
    const context = useContext((PostContext));

    const handleOnSubmit = (event) => {
        event.preventDefault();

        axios.post(`/posts`, {
            id: card ? card.id : 0,
            content: input,
        }).then(() => {
            navigate('/');
            context.setPosts([]);
        })
    }

    const handleOnClose = (e) => {
        e.preventDefault();

        if (card) {
            closeEdition()
        } else {
            navigate('/');
        }
    }

    return (
        <div className="card text edit-or-edit">
            <div className="text-end">
                <button type="button" className="btn btn-link" onClick={handleOnClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                </button>
            </div>
            <div className="card-body text-start">
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputPost">{card ? 'Редактирование поста' : 'Создание поста'}</label>
                        <input type="text" value={input} onChange={handleOnChange} className="form-control" id="inputPost" placeholder="Введите пост" />
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <button disabled={!input} className="btn btn-primary">
                            {card ? 'Редактировать' : 'Опубликовать'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddOrEditPost;
