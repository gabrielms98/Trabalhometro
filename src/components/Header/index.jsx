import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'

import { auth } from '../../api/firebase'
import Archive from '../../assets/archive.svg'

import { Container, ProfileImg, HeaderActionsContainer, Icon } from './styles'

function Header() {
    const [user] = useAuthState(auth)
    const history = useHistory()

    const logout = () => {

        auth.signOut().then(reponse =>{
            console.log(reponse)
            history.push('/')
        })
    }

    return (
        <Container>
            <ProfileImg src={user.photoURL} onClick={logout}/>
            <HeaderActionsContainer>
               <Icon src={Archive}/>
            </HeaderActionsContainer>
        </Container>
    )
}

export default Header;