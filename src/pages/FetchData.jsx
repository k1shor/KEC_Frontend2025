import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FetchData = () => {
    let [posts, setPosts] = useState([])
    let [length, setLength] = useState(20)

    useEffect(() => {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        // options are optional for get method
        // let options = {
        //     method: "GET",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify(obj)
        // }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='flex justify-evenly flex-wrap gap-5 my-5'>
            {
                posts.slice(0, length).map((post) => {
                    return <Link to={`/post/${post.id}`} className='w-[400px] p-4 shadow rounded-md'>
                        <h1 className='text-sm!'>Post ID: {post.id}</h1>
                        <h1 className='text-sm!'>Title: {post.title}</h1>
                    </Link>
                })
            }

            {
                length < 100 &&
                <button onClick={() => { setLength(length + 20) }}>SHow More</button>
            }
            {
                length > 20 &&
                <button onClick={() => { setLength(length - 20) }}>SHow Less</button>
            }
        </div>
    )
}

export default FetchData