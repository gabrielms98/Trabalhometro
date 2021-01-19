import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 10%;

    padding: .5rem 1.2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 50rem) {
        display: none;
    }

`

export const ProfileImg = styled.img`
    width: 3.5rem;
    height: 3.5rem;

    border-radius: 50%;
    border: 3px solid white;

    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);
`

export const HeaderActionsContainer = styled.div`
    background: white;
    color: #023047;

    padding: .5rem;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`