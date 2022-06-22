import { auth, googleAuthProvider } from '@lib/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useContext } from 'react'
import { UserContext } from '@lib/context'
import { UsernameForm } from '@components/UsernameForm'
import { UserPage } from '@components/UserPage'

export default function Enter(props) {
    const { user, username } = useContext(UserContext)
    
    return (
      <div className="content-container">
        {user ? <SignOutPage /> : <SignInPage />}
      </div>
    )
}

function SignInPage () {
    const signInWithGoogle =async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider)
        } catch {
            console.log('Operation canceled.')
        }
    }

    return (
        <>
            <h1>This is the LogIn page</h1>
            <p>LogIn to use some of the interactive features and apps on the website.</p>
            <button className="btn-default" onClick={signInWithGoogle}>
                <img src={'/google.png'} className="btn-icon" />Sign in with Google
            </button>
        </>
    )
}

function SignOutPage () {
    const { user, username } = useContext(UserContext)

    return (
        <>
            {username ? <UserPage /> : <UsernameForm />}
            <button className='btn-default' onClick={() => signOut(auth)}>Sign Out</button>
        </>
    )
}
