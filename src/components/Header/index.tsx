import Image from "next/image";

import Avatar from "@atlaskit/avatar";
import Search from "./Search";
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
          width="15"
          height="50"
        />
      </a>
      <Search />
      {!!user && (
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
