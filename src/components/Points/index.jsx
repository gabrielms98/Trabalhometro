import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase'

import { firestore, auth } from '../../api/firebase'
import { store } from '../../store/UserProvider'

import { Container } from './styles'

function Points() {

    const [user] = useAuthState(auth)
    const workMarkRef = firestore.collection('workMarks')

    let today = new Date().setHours(0,0,0,0)
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate()+1)
    today = firebase.firestore.Timestamp.fromDate(new Date(today))
    tomorrow = firebase.firestore.Timestamp.fromDate(new Date(tomorrow))

    const query = workMarkRef.where('uid', '==', user.uid).where('timestamp', '>', today.seconds).where('timestamp', '<', tomorrow.seconds)
    const { state, dispatch } = useContext(store)
    const [values, loading, error] = useCollectionData(query)

    const formatTime = (time) => {
        const date = new Date(time)

        return `${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <Container>
            {values && values.map((snap, i) => (
                <p key={i}>{formatTime(snap.time)}</p>
            ))}
        </Container>
    )
}

export default Points