import React from 'react';

import Header from '../../components/Header'
import Points from '../../components/Points'
import Clock from '../../components/Clock'
import RegisterButton from '../../components/RegisterButton'

import { Container } from './styles';

function Home() {

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