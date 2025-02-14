import { createContext, useState } from 'react'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `basic+${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });

        const data = await response.json()

        //console.log(data)
        setUsers(data);
        setLoading(false);
    }

    return (
        <GithubContext.Provider
            value={{
                users: users,
                loading: loading,
                fetchUsers
            }}
        >
            {children}
        </GithubContext.Provider>
    )
};

export default GithubContext;