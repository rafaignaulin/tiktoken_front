import { NextPage } from "next";
import * as styles from "./styles";

import Button from '@atlaskit/button';
import Image from "next/image";

import { ButtonItem, MenuGroup, Section } from "@atlaskit/menu";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from '../../store/User/user.action'

const userPage: NextPage = () => {
  // const user = useSelector(state => state.UserReducer)
  // const dispatch = useDispatch()

  // const handleChangeName = () => {
  //   dispatch(userActions.setUser({name}))
  // }

  return (

    <styles.Principal>

      <styles.Menu minHeight={600} maxHeight={1800} minWidth={320} maxWidth={320}>
        <Section title="Usuário" isScrollable>
          <ButtonItem description="Configurações da conta"> Conta </ButtonItem>
          <ButtonItem>Meus Ingressos</ButtonItem>
        </Section>
      </styles.Menu>

      <styles.Configurations>
        <h2>Configurações</h2>

        <styles.ConfigUser>

          <styles.UserInfo>
          <Image src='/assets/avatars/147142.png' width='72px' height='72px' alt='Rafael Ignaulin'/>
          <h3>Rafael Ignaulin</h3>
          </styles.UserInfo>

          <styles.Box>

            <styles.Field>
              <h3>Nome de usuário</h3>
              <span>Rafael</span>
              <Button appearance="subtle"></Button>
            </styles.Field>

            <styles.Field>
              <h3>Email</h3>
              <span>rafa@rafa.com</span>
              <Button appearance="subtle"></Button>
            </styles.Field>

            <styles.Field>
              <h3>Senha</h3>
              <span>**************</span>
            </styles.Field>

          </styles.Box>

          <Button>Mudar senha</Button>

        </styles.ConfigUser>

      </styles.Configurations>
      
    </styles.Principal>
  )
};

export default userPage;