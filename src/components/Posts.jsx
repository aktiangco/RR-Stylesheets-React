import React from "react";
import { useState, useEffect } from "react";
import '../index.css';



const Posts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []);
    
    return (
        <div className="posts">
        {posts.map((post) => (
            <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))}
        </div>
    );
    }

    export default Posts;