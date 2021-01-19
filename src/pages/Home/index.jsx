import React from 'react';

import Main from '../../components/Main'
import Dashboard from '../../components/Dashboard'

import { Container } from './styles'

function Home() {

    return (
        <Container>
            <Main />
            <Dashboard />
        </Container>
    )
}

export default Home;