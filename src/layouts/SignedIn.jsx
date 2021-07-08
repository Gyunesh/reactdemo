import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'


export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" />
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
