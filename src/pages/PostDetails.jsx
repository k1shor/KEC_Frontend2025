import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    let [post, setPost] = useState({})
    let { id } = useParams()

    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/posts/${id}`
        axios.get(url)
            .then(response => setPost(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='w-1/2 p-5 my-5 mx-auto rounded shadow'>
            <h1 className='text-sm!'>Post ID: {post.id}</h1>
            <h1 className='text-sm!'>Title: {post.title}</h1>
            <p className='text-justify'>
                {post.body}
            </p>
        </div>
    )
}

export default PostDetails