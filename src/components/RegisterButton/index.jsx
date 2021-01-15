import React from 'react';

import { Container } from './styles';

function RegisterButton() {
    return (
        <Container onClick={() => console.log("CLICOU!", new Date().toLocaleDateString())}>
            REGISTRAR
        </Container>
    )
}

export default RegisterButton;