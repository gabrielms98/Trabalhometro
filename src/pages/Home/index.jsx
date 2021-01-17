import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'

import Header from '../../components/Header'
import Points from '../../components/Points'
import Clock from '../../components/Clock'
import RegisterButton from '../../components/RegisterButton'

import { auth } from '../../api/firebase'

import { Container } from './styles';

function Home() {

    const [user] = useAuthState(auth)

    return (
        <Container>
            <Header />
            <Points />
            <Clock />
            <RegisterButton />
        </Container>
    )
}

export default Home;