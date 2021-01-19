import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background: #CADEEE;

    padding-top: 1rem;

    >*+* {
        display: none;
    }

    @media (min-width: 50rem) {

        display: grid;

        padding: 0 8rem;

        grid-template-columns: 30vw 90vw;
        gap: 2rem;

        >*+* {
            display: flex;
        }
    }
`