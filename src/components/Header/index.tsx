import Image from "next/image";

import Avatar from "@atlaskit/avatar";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import { Container } from "./styles";

interface Props {
  title: string;
  user?: {
    name: string;
    avatar_url: string;
  };
}

export function Header({ title, user }: Props) {
  return (
    <Container>
      <a href="/home">
        <Image
          className="logo"
          src="/assets/logo.svg"
          alt="logo"
          width="175"
          height="50"
        />
      </a>
      <h1>{title}</h1>
      <TextField
        isCompact={false}
        className="textfield"
        onChange={(change) => console.log(change)}
        placeholder="Busque aqui seus eventos e lugares"
      />
      {!user ? (
        <Button appearance="primary">Entrar</Button>
      ) : (
        <Avatar
          appearance="circle"
          src={user.avatar_url}
          size="large"
          name={user.name}
        />
      )}
    </Container>
  );
}
