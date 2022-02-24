import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CommentCard from './CommentCard'

const Comments = () => {

    const [comments, setComments] = useState([])

    const params = useParams()

    const fetchComments = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchComments()
    }, [params])


    return (
        <div>
            {console.log(params)}
            {comments.map((el, key)=><CommentCard com={el} key={key} />)}
        </div>
    )
}

export default Comments