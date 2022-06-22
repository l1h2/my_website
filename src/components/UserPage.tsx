import { useContext } from 'react'
import { UserContext } from '@lib/context'

export function UserPage() {
    const { user, username } = useContext(UserContext)

    return (
        <div>
            <h1>Welcome {username}</h1>
            <p>Here you can see your activity in the website.</p>
        </div>
    )
}
