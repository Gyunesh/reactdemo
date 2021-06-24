import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignOut from './SignOut'
import SignedIn from './SignedIn'
import { useHistory } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setisAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut() {
        setisAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setisAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top" >
                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
