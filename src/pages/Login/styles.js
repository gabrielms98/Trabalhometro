import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   height: 100%;

   display: flex;
   justify-content: center;
   align-items: center;

   background: #CADEEE;
`

export const LoginButton = styled.button`
   width: 16.625rem;
   height: 4.56rem;

   background: #30ACE5;
   color: #F6F6F6;
   font-size: 1.25rem;
   font-weight: bold;

   display: flex;
   justify-content: center;
   align-items: center;

   border-radius: 12px;

   outline: none;
   appearance: none;
   border: none;

   :hover {
      cursor: pointer;
   }
`