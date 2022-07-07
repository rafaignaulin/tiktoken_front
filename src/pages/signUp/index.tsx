import Button, { ButtonGroup, LoadingButton } from "@atlaskit/button";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  ValidMessage
} from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import * as S from "@styles/pages/signUp";
import { CreateUser } from "@type/schemas";
import { trpc } from "@utils/trpc";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

const FormDefaultExample = () => {
  const router = useRouter();
  const userMutation = trpc.useMutation("user.create");

  if (userMutation.isSuccess) router.push("/home");

  return (
    <S.Container>
      <Image src="/assets/signup_bg.jpg" width="1440" height="1440" />
      <S.Content>
        <S.AnimationContainer>
          <S.FormContainer>
            <Image
              className="logo"
              src="/assets/logo.svg"
              alt="logo"
              width="350"
              height="100"
            />

            <Form<CreateUser>
              onSubmit={async (data) => {
                userMutation.mutate(data);
                // try {
                //   const response = await api.createUser(data);
                //   router.push("/signIn");
                // } catch (err: any) {
                //   console.log(err);
                //   setApiError(err.response.data);
                // }
              }}
            >
              {({ formProps, submitting }) => (
                <form {...formProps}>
                  <FormHeader
                    title="  Cadastro"
                    description="Seja bem vindo!"
                  />
                  <FormSection>
                    <Field
                      aria-required={true}
                      name="name"
                      label="Nome"
                      isRequired
                      defaultValue=""
                    >
                      {({ fieldProps, error }) => (
                        <Fragment>
                          <TextField autoComplete="off" {...fieldProps} />
                          {!error && (
                            <HelperMessage>
                              Voce pode usar letras.
                            </HelperMessage>
                          )}
                          {error && (
                            <ErrorMessage>
                              Este nome já está em uso, utilize outro.
                            </ErrorMessage>
                          )}
                          {/* {apiError && (
                            <ErrorMessage>{apiError.message}</ErrorMessage>
                          )} */}
                        </Fragment>
                      )}
                    </Field>
                    <Field
                      name="email"
                      label="Email"
                      defaultValue=""
                      isRequired
                    >
                      {({ fieldProps, error }) => (
                        <Fragment>
                          <TextField {...fieldProps} />
                          {!error && (
                            <HelperMessage>Precisa conter @</HelperMessage>
                          )}
                          {error && <ErrorMessage>{error}</ErrorMessage>}
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
                            {error && !valid && (
                              <HelperMessage>
                                Use 8 ou mais caracteres com uma mistura de
                                letras numeros e simbolos.
                              </HelperMessage>
                            )}
                            {error && (
                              <ErrorMessage>
                                Senha precisa ter mais que 8 caracteres.
                              </ErrorMessage>
                            )}
                            {valid && meta.dirty ? (
                              <ValidMessage>Ótima senha!</ValidMessage>
                            ) : null}
                          </Fragment>
                        );
                      }}
                    </Field>
                  </FormSection>

                  <FormFooter>
                    <ButtonGroup>
                      <Button appearance="subtle">
                        <Link href="/home">Cancelar</Link>
                      </Button>
                      <LoadingButton
                        type="submit"
                        appearance="primary"
                        isLoading={submitting}
                      >
                        Criar sua conta
                      </LoadingButton>
                    </ButtonGroup>
                  </FormFooter>
                </form>
              )}
            </Form>
          </S.FormContainer>
        </S.AnimationContainer>
      </S.Content>
    </S.Container>
  );
};

export default FormDefaultExample;
