import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

export default function Post() {
    const [posts, setPosts] = useState({})
    const [load, setLoad] = useState(false)
    const {id} = useParams()
    const navi = useNavigate()



    const back = () => {
        navi(-1)
    }
    useEffect(() => {
        setLoad(true)
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(resp => resp.json())
            .then(post => setPosts(post))
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
                        <h2>Post</h2>
                        <button onClick={back}>back</button>
                        <div className="img">
                            <img src={posts.url} alt="icon"/>
                        </div>
                        <div className="img">
                            <img src={posts.thumbnailUrl} alt="icon"/>
                        </div>
                    </>
            }
        </>
    );
}