import { Fragment } from "react";

import TextField from "@atlaskit/textfield";

import Button, { ButtonGroup, LoadingButton } from "@atlaskit/button";
import Form, {
  Field,
  FormFooter,
  FormHeader,
  FormSection
} from "@atlaskit/form";
import { trpc } from "@utils/trpc";


import { api } from "@services/api";
import { AuthenticateUser } from "@types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./styles";



const FormDefaultExample = () => {
  const [apiError, setApiError] = useState(null);
  const router = useRouter();
const userMutation = trpc.useMutation("user.authenticate", {
  onSuccess({ token }) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("token", token);
    }
  }
});
  return (
    <S.Container>
    <S.Content>
    <S.AnimationContainer>
      
    <Image
          className="logo"
          src="/assets/logo.svg"
          alt="logo"
          width="350"
          height="100"
        />
      <S.FormContainer>
        <Form<AuthenticateUser>
          onSubmit={async (data) => {
            userMutation.mutate(data);

            try {
              const response = await api.authenticateUser(data);

              router.push('/home')
            } catch (err) {
              
              setApiError(err.response.data);
            }
            
            return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
            data.email === "error" ? { email: "IN_USE" } : undefined
            );
          }}
          >
          {({ formProps, submitting }) => (
            <form {...formProps}>
              <FormHeader
                title="Faça seu login"
                description="Bem vindo de volta!"
                />
              <FormSection>
                <Field name="email" label="Email" defaultValue="" isRequired>
                  {({ fieldProps, error }) => (
                    <Fragment>
                      <TextField {...fieldProps} />
                    </Fragment>
                  )}
                </Field>
                <Field
                  aria-required={true}
                  name="password"
                  label="Senha"
                  defaultValue=""
                  isRequired
                  validate={(value) =>
                    value && value.length < 8 ? "TOO_SHORT" : undefined
                  }
                  >
                  {({ fieldProps, error, valid, meta }) => {
                    return (
                      <Fragment>
                        <TextField type="password" {...fieldProps} />
                      </Fragment>
                    );
                  }}
                </Field>
              </FormSection>

              <FormFooter>
                <ButtonGroup>
                <Button appearance="subtle"><Link href='/home'>Cancelar</Link></Button>
                  <LoadingButton
                    type="submit"
                    appearance="primary"
                    isLoading={submitting}
                    >
                    Logar
                  </LoadingButton>
                </ButtonGroup>
              </FormFooter>
            </form>
          )}
        </Form>
        <span>Não possui uma conta?   - </span>
        <Link href='/signUp'>Criar conta</Link>
      </S.FormContainer>
        </S.AnimationContainer>
    </S.Content>

        <Image
        src="/assets/signup_bg.jpg"
        width="1440"  
        height="1440"
        />
    </S.Container>
  );
};

export default FormDefaultExample;
