import React, { Fragment, useState } from 'react';
import json from "../../aha.json";

import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/standard-button';
import TextField from '@atlaskit/textfield';

import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  HelperMessage,
  ValidMessage,
} from '@atlaskit/form';
import { api } from '@api/index';


interface SignUpFormData {
    name: string;
    email: string;
    password: string;
  } 

const FormDefaultExample = () => {

    const [apiError, setApiError] = useState(null);

return (
    <div
    style={{
      display: 'flex',
      width: '400px',
      maxWidth: '100%',
      margin: '0 auto',
      flexDirection: 'column',
    }}
  >
    <Form<SignUpFormData>
      onSubmit={async (data) => {
        console.log('form data', data);
        try {
            const response = await api.post('/user/authenticate', data);
            console.log(response)
        }
        catch(err) {
            console.log(err.response.data)
            setApiError(err.response.data);
        }

        return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
          data.name === 'error' ? { name: 'IN_USE' } : undefined,
      );
      }}
    >
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <FormHeader
            title="Sign in"
            description="* indicates a required field"
          />
          <FormSection>
            <Field 
              name="email" 
              label="Email" 
              defaultValue="" 
              isRequired>
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
              defaultValue=""
              isRequired
              validate={(value) =>
                value && value.length < 8 ? 'TOO_SHORT' : undefined
              }
            >
              {({ fieldProps, error, valid, meta }) => {
                return (
                  <Fragment>
                    <TextField type="password" {...fieldProps} />
                    {error && !valid && (
                      <HelperMessage>
                        Use 8 or more characters with a mix of letters, numbers
                        and symbols.
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
                Sign in
              </LoadingButton>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  </div>
)
}
 
;

export default FormDefaultExample;