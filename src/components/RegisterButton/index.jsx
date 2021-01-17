import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import moment from 'moment'

import { firestore, auth } from '../../api/firebase'

import { Container } from './styles'

function RegisterButton() {

    const [user] = useAuthState(auth)
    const[typeOfMark, setTypeOfMark] = useState('in')
    
    const addWorkMark = () => {
        const workMarkRef = firestore.collection('workMarks')

        const date = new Date()
        const m = moment(new Date()).unix()

        workMarkRef.add({
            date: date.toString(),
            timestamp: m,
            type: typeOfMark,
            uid: user.uid
        }).then((res) => console.log(res))

        changeTypeOfMark()
    }

    const changeTypeOfMark = () => {
        if (typeOfMark === 'in') setTypeOfMark('out')
        else setTypeOfMark('in')
    }

    return (
        <Container onClick={addWorkMark}>
            REGISTRAR
        </Container>
    )
}

export default RegisterButton;