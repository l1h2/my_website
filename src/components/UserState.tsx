import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '@lib/context'

export default function UserState() {
  const { user, username } = useContext(UserContext)

  return (
    <Link href='/enter'>
      <div className="login-container group">
        <img className="user-img" src={user?.photoURL || "/hacker.png"} />
        <span className="login-tooltip group-hover:scale-100">
          {username ? username : 'Log In'}
        </span>
      </div>
    </Link>
  )
}
