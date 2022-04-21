import Image from 'next/image';
import { Container } from "./styles";

import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import Avatar from '@atlaskit/avatar';
interface Props {
    title: string;
    user?: {
        name: string;
        avatar_url:string;
    };
}

export const Header = ({title, user}:Props) => {

    return (
        <Container>
            <Image className='logo' src='/assets/logo.png' alt='logo' width='175' height='50' ></Image>
            <h1>{title}</h1>
            <TextField  isCompact={false} className='textfield' onChange={(change) => console.log(change)} placeholder='Busque aqui seus eventos e lugares'/>
            {!user ? 
                <Button appearance='primary' >Entrar</Button> : 
                <Avatar appearance="circle" src={user.avatar_url} size="large" name={user.name}/> 
                }
        </Container>
    )


}

