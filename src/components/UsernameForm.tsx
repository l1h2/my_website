import { useContext, useState, useEffect, useCallback } from 'react'
import { doc, writeBatch, getDoc, getFirestore } from 'firebase/firestore'
import debounce from 'lodash.debounce'
import { UserContext } from '@lib/context'

export function UsernameForm () {
    const [formValue, setFormValue] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [loading, setLoading] = useState(false)

    const { user, username } = useContext(UserContext)

    const onSubmit = async (e) => {
        e.preventDefault()
        const userDoc = doc(getFirestore(), 'users', user.uid)
        const usernameDoc = doc(getFirestore(), 'usernames', formValue)
    
        const batch = writeBatch(getFirestore())
        batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName })
        batch.set(usernameDoc, { uid: user.uid })
    
        try {
            await batch.commit()
        } catch {
            console.log("Operation failed.")
        }
    }

    const onChange = (e) => {
        const val = e.target.value.toLowerCase()
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    
        if (val.length < 3) {
          setFormValue(val)
          setLoading(false)
          setIsValid(false)
        }
    
        if (re.test(val)) {
          setFormValue(val)
          setLoading(true)
          setIsValid(false)
        }
    }

    useEffect(() => {
        checkUsername(formValue)
    }, [formValue])

    const checkUsername = useCallback(
        debounce(async (username) => {
            if (username.length >= 3) {
                const ref = doc(getFirestore(), 'usernames', username)
                const snap = await getDoc(ref)
                setIsValid(!snap.exists())
                setLoading(false)
            }
        }, 500),
        []
    )
    
    return (
        <section>
            <h1>You still haven`t picked an username</h1>
            <p>Please select one to enable access to all features in the website.</p>
            <form onSubmit={onSubmit} className="input-form">
                <input name="username" placeholder="Username" value={formValue} onChange={onChange} />
                <button type="submit" className="btn-input" disabled={!isValid}>
                    Sign Up
                </button>
            </form>
            <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
        </section>
    )
}

function UsernameMessage({ username, isValid, loading }) {
    if (loading) {
      return <p>Checking...</p>
    } else if (isValid) {
      return <p className="text-success">{username} is available!</p>
    } else if (username && !isValid) {
      return <p className="text-danger">That username is taken!</p>
    } else {
      return <p></p>
    }
}
