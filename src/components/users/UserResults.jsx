import React, { useEffect, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

//import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

function UserResults() {
    const githubContext = useContext(GithubContext)
    const { users, loading, fetchUsers } = githubContext

    useEffect(() => {
        fetchUsers()
    }, [])

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                ))}
            </div>
        );
    } else {
        return <Spinner />
    }
}

export default UserResults