import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase'

import { firestore, auth } from '../../api/firebase'

import { Container, MarkText, MarkTimeImg, MarkContainer } from './styles'
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowDown from '../../assets/arrow-down.svg'

function Points() {

    const [user] = useAuthState(auth)
    const workMarkRef = firestore.collection('workMarks')

    let today = new Date().setHours(0,0,0,0)
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate()+1)
    today = firebase.firestore.Timestamp.fromDate(new Date(today))
    tomorrow = firebase.firestore.Timestamp.fromDate(new Date(tomorrow))

    const query = workMarkRef.where('uid', '==', user.uid).where('timestamp', '>', today.seconds).where('timestamp', '<', tomorrow.seconds)

    const [values] = useCollectionData(query)

    const formatTime = (d) => {
        const date = new Date(d)

        return `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`
    }

    return (
        <Container>
            {values && values.map((snap, i) => (
                <MarkContainer key={i}>
                    <MarkText>{formatTime(snap.date)}</MarkText>
                    {
                        snap.type === 'in' ? <MarkTimeImg src={ArrowDown} /> :
                        <MarkTimeImg src={ArrowUp}/>
                    }
                </MarkContainer>
            ))}
        </Container>
    )
}

export default Points