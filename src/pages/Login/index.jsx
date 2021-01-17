import React, { useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom'
import * as firebase from 'firebase/app'

import { auth, firestore } from '../../api/firebase'
import { store } from '../../store/UserProvider'

import { Container, LoginButton } from './styles';

function Login() {

    const [user] = useAuthState(auth)
    const history = useHistory()

    const { dispatch } = useContext(store)

    useEffect(() => {
        if(user) {
            const workMarkRef = firestore.collection('workMarks')
            history.push('/home')

            const query = workMarkRef.where('uid', '==', user.uid).orderBy('createdAt')
            query.get().then(snapshot => {
                const aux = []
                snapshot.forEach(doc => {
                    aux.push(doc.data())
                })

                dispatch({type: 'setWorkMarks', payload: aux})
            })
        }
    }, [user, history, dispatch])

    const loginWithGoogle = () => {
        
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then(() => {
            dispatch({type: 'setUser', payload: user})
            history.push('/home')
        })
    }

    return (
        <Container>
            <LoginButton onClick={loginWithGoogle}>Login with Google</LoginButton>
        </Container>
    )
}

export default Login;