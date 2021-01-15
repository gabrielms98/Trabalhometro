import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 10rem;

    color: #F6F6F6;
    font-size: 7.5rem;

    display: flex;
    justify-content: center;

    margin: auto 0;
`

export const ClockTics = styled.div`
    
    animation: tic 2s linear infinite;

    @keyframes tic {
        50% {
            opacity: 0;
        }
    }
`