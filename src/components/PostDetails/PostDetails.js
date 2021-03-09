import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const { id } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));

    }, [])
    return (
        <div>
            <h3>Post ID: {id}</h3>
            <p>User ID: {post.id}</p>
            <p>Post Title: {post.title}</p>
            <p>Post Body: {post.body}</p>
        </div>
    );
};

export default PostDetails;