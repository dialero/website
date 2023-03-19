import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Input, Spacer, Textarea } from '@nextui-org/react';
import { useForm, Controller } from 'react-hook-form';
import ReCaptcha from '@matt-block/react-recaptcha-v2';
import { config } from './config';

// global required state for required inputs for debugging the form
const required = true;

type FormData = {
  name: string;
  email: string;
  subject: string;
  description: string;
};

export default function SupportForm(): JSX.Element {
  const [captchaState, setCaptchaState] = useState({
    response: '',
    error: true,
    errorMessage: '',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    // console.log({ data });
    const params = {
      ...data,
      retURL: '',
      orgid: '00D0Y000001iXjC',
      captcha_settings: JSON.stringify({
        keyname: 'dialero_site',
        fallback: 'true',
        orgId: '00D0Y000001iXjC',
        ts: new Date().getTime(),
      }),
      'g-recaptcha-response': captchaState.response,
    };

    const encodedParams = Object.keys(params)
      .map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      })
      .join('&');

    const url = `https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&${encodedParams}`;
    // console.log({ url });
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
    })
      .then((response) => response.text())
      .then((result) => console.log({ result }))
      .catch((error) => console.log('error', error));
  });

  return (
    <BrowserOnly fallback={<>Loading...</>}>
      {() => (
        <form onSubmit={onSubmit}>
          <input
            type="hidden"
            name="captcha_settings"
            value='{"keyname":"dialero_site","fallback":"true","orgId":"00D0Y000001iXjC","ts":""}'
          />
          <input type="hidden" name="orgid" value="00D0Y000001iXjC" />
          <input
            type="hidden"
            name="retURL"
            value="http://help.dialero.com/dialero_contact_support.html?sent=true"
          />
          <h3>Please fill in your contact information and describe your issue</h3>
          <Controller
            name="name"
            control={control}
            rules={{ required }}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Name"
                status={errors && errors.name ? 'error' : null}
                width="100%"
              />
            )}
          />
          <Spacer y={0.5} />
          <Controller
            name="email"
            control={control}
            rules={{ required }}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Email"
                status={errors && errors.email ? 'error' : null}
                width="100%"
              />
            )}
          />
          <Spacer y={0.5} />
          <Controller
            name="subject"
            control={control}
            rules={{ required }}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Subject"
                status={errors && errors.subject ? 'error' : null}
                width="100%"
              />
            )}
          />
          <Spacer y={0.5} />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              // <Input type="textarea" />
              <Textarea
                {...field}
                maxLength={500}
                rows={7}
                placeholder="Describe your issue"
                width="100%"
              />
            )}
          />
          <Spacer y={0.5} />
          <ReCaptcha
            siteKey={config.grsitekey}
            theme="light"
            size="normal"
            onSuccess={(response) => {
              // console.log(`Successful, result is ${response}`);
              setCaptchaState({ response, error: false, errorMessage: '' });
            }}
            onError={() => {
              // console.log('Something went wrong, check your conenction');
              setCaptchaState({
                response: '',
                error: true,
                errorMessage: 'Something went wrong, check your conenction.',
              });
            }}
            onExpire={() => {
              // console.log('Something went wrong, check your conenction');
              setCaptchaState({
                response: '',
                error: true,
                errorMessage: 'Verification has expired, re-verify.',
              });
            }}
          />
          <Spacer y={0.5} />
          <button type="submit" className="button button--primary" disabled={captchaState.error}>
            Submit
          </button>
        </form>
      )}
    </BrowserOnly>
  );
}
