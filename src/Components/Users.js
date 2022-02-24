import React, { useState, useEffect } from 'react'
import axios from "axios"
import UserCard from './UserCard'

const Users = () => {
    const [listUsers, setlistUsers] = useState([])

    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setlistUsers(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchUsers()
    }, [])



    return (
        <div className='row'>
            {listUsers.map((el, i) => <UserCard user={el} key={i} />)}
        </div>
    )
}

export default Users