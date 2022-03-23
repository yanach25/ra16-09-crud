import {useEffect, useState} from "react";
import PostsContext from "./PostsContext";
import axiosInstance from "./axios-config";

export default function PostsProvider(props) {
    const [posts, setPosts] = useState();
    useEffect(() => {
        axiosInstance.get('/posts').then((res) => {
            setPosts((prev) => {
                if (JSON.stringify(prev) !== JSON.stringify(res.data)) {
                    return res.data;
                }

                return prev;
            });
        })
    }, [posts])

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {props.children}
        </PostsContext.Provider>
    ) }
