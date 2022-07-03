import { Fragment, useState } from "react";

import ButtonGroup from "@atlaskit/button/button-group";
import LoadingButton from "@atlaskit/button/loading-button";
import Button from "@atlaskit/button/standard-button";
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
import { trpc } from "@utils/trpc";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const FormDefaultExample = () => {
  const [apiError, setApiError] = useState(null);
  const userMutation = trpc.useMutation("user.create");

  console.log("*** userMutation", userMutation.status, userMutation.data);

  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        maxWidth: "100%",
        margin: "0 auto",
        flexDirection: "column"
      }}
    >
      <Form<SignUpFormData>
        onSubmit={async (data) => {
          console.log("*** data", data);
          userMutation.mutate(data);

          // try {
          //   await api.post("/user/create", data);
          // } catch (err: any) {
          //   setApiError(err.response.data);
          // }

          // return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
          // data.name === "error" ? { name: "IN_USE" } : undefined
          // );
        }}
      >
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <FormHeader
              title="Sign in"
              description="* indicates a required field"
            />
            <FormSection>
              <Field aria-required={true} name="name" label="Nome" isRequired>
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField autoComplete="off" {...fieldProps} />
                    {!error && (
                      <HelperMessage>
                        You can use letters, numbers and periods.
                      </HelperMessage>
                    )}
                    {error && (
                      <ErrorMessage>
                        This name is already in use, try another one.
                      </ErrorMessage>
                    )}
                    {apiError && <ErrorMessage>{"aha"}</ErrorMessage>}
                  </Fragment>
                )}
              </Field>
              <Field name="email" label="Email" isRequired>
                {({ fieldProps, error }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {!error && (
                      <HelperMessage>Must contain @ symbol</HelperMessage>
                    )}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                  </Fragment>
                )}
              </Field>
              <Field
                aria-required={true}
                name="password"
                label="Password"
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
                          Use 8 or more characters with a mix of letters,
                          numbers and symbols.
                        </HelperMessage>
                      )}
                      {error && (
                        <ErrorMessage>
                          Password needs to be more than 8 characters.
                        </ErrorMessage>
                      )}
                      {valid && meta.dirty ? (
                        <ValidMessage>Awesome password!</ValidMessage>
                      ) : null}
                    </Fragment>
                  );
                }}
              </Field>
            </FormSection>

            <FormFooter>
              <ButtonGroup>
                <Button appearance="subtle">Cancel</Button>
                <LoadingButton
                  type="submit"
                  appearance="primary"
                  isLoading={submitting}
                >
                  Sign up
                </LoadingButton>
              </ButtonGroup>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
};

export default FormDefaultExample;
