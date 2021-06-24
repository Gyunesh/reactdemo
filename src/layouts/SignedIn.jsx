import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'


export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="C:\Users\sun\Desktop\avatar.jpeg" />
                <Dropdown pointing="top left" text="Gunes">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Cikis Yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
