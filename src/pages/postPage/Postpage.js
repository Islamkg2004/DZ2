import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

export default function PostPage() {
    const [post, setPost] = useState([])
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    useEffect(() => {
        setLoad(true)
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(resp => resp.json())
            .then(data => setPost(data))
            .finally(() => setLoad(false))
    }, [])
    return (
        <>
            {
                load
                    ?
                    <p>Loading....</p>
                    :
                    <>
                        <h2>Posts</h2>
                        <button onClick={back}>Back</button>
                        {post.map((k, i) => <div key={i}>
                                <p>{k.title}</p>
                                <Link to={`/post/${k.id}`}>Read More</Link>
                                <p>--------</p>
                            </div>
                        )}
                    </>
            }
        </>
    );
}