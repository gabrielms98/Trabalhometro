import React, { useState, useEffect } from 'react';
import { Container, ClockTics } from './styles';

function Clock() {

    const [timer, setTimer] = useState({})

    useEffect(() => {
        setInterval(() => {
            const date  = new Date();

            setTimer({
                hour: date.getHours(),
                minute: date.getMinutes()
            })
        }, 1000)
    }, [])

    return (
        <Container>
            {timer.hour}<ClockTics>:</ClockTics>{timer.minute < 10 ? '0' + timer.minute : timer.minute}
        </Container>
    )
}

export default Clock;