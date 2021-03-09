import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    return (
        <div>
            <h3>Details of a user</h3>
            <h3>Total Post:{post.length}</h3>
            {
                post.map(post => <Post post={post} ></Post>)
            }
        </div>
    );
};

export default Home;