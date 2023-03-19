import React, { useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Input, Spacer, Textarea } from '@nextui-org/react';
import { Controller, useForm } from 'react-hook-form';
import ReCaptcha from '@matt-block/react-recaptcha-v2';
import { config } from './config';

// global required state for required inputs for debugging the form
const required = true;

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  description: string;
};

export default function LeadForm(): JSX.Element {
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
      lead_source: 'dialero.com',
      retURL: '',
      oid: '00D0Y000001iXjC',
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

    const url = `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&${encodedParams}`;
    console.log({ url });
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
          <input type="hidden" name="retURL" value="http://dialero.com?sent=true" />
          <input type="hidden" name="lead_source" value="dialero.com" />
          <h2>Contact Us</h2>
          <Controller
            name="first_name"
            control={control}
            rules={{ required }}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="First Name"
                status={errors && errors.first_name ? 'error' : null}
                width="100%"
              />
            )}
          />
          <Spacer y={0.5} />
          <Controller
            name="last_name"
            defaultValue=""
            control={control}
            rules={{ required }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Last Name"
                status={errors && errors.last_name ? 'error' : null}
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
            name="company"
            control={control}
            rules={{ required }}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Company Name"
                status={errors && errors.company ? 'error' : null}
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
              <Textarea {...field} maxLength={500} rows={7} placeholder="Message" width="100%" />
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
