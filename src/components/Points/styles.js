import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    height: 40%;

    background: #F6F6F6;
    border-radius: 12px;
    padding: 1rem;

    margin-top: 3rem;
    position: relative;

    &::before {
        content: "${new Date().toLocaleDateString()}";
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10%;
        background: #F6F6F6;
        position: absolute;
        top: -9%;
        right: 5%;

        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        padding: 0 .75rem;
    }
`

export const MarkContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    border-bottom: 1px solid rgba(2, 48, 71, .4);
    margin-bottom: 1rem;

    &:last-child {
        border-bottom: none; 
    }
`

export const MarkText = styled.p`
    color: #023047;
    font-size: 2.625rem;
`

export const MarkTimeImg = styled.img`
    width: 2rem;
    height: 2rem;
`