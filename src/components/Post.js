import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getDefaultNormalizer } from "@testing-library/react";

function Post () {
    const [post, setPost] = useState([]);  
    let params = useParams();
    let id = params.id;

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res => {
            setPost(res.data);
        }) 
    },[]);

    // console.log(post);

    return (
        <div>
            <h4>Post { post.title }</h4>
            <p>{ post.body }</p>
        </div>
    )
}

export default Post