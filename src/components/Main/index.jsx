import React from 'react';

import Header from '../Header'
import Points from '../Points'
import Clock from '../Clock'
import RegisterButton from '../RegisterButton'

import { Container } from './styles';

function Main() {

    return (
        <Container>
            <Header />
            <Points />
            <Clock />
            <RegisterButton />
        </Container>
    )
}

export default Main;