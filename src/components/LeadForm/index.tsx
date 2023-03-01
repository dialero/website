import { Input, Spacer, Textarea } from '@nextui-org/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  description: string;
};

export default function LeadForm(): JSX.Element {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    const body = new FormData();
    for (const key in data) {
      body.append(key, data[key]);
    }
    const url = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';
    fetch(url, {
      method: 'post',
      body,
    });
  });

  return (
    <>
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
          rules={{ required: true }}
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
          name="first_name"
          control={control}
          rules={{ required: true }}
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
          rules={{ required: true }}
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
          rules={{ required: true }}
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
          render={({ field }) => (
            <Textarea {...field} maxLength={500} rows={7} placeholder="Message" width="100%" />
          )}
        />
        <Spacer y={0.5} />
        <div className="g-recaptcha" data-sitekey="6Ld7XDUUAAAAABxymJikCkzen8dDbHrFBtGrIdCk"></div>
        <Spacer y={0.5} />
        <button type="submit" className="button button--primary">
          Submit
        </button>
      </form>
    </>
  );
}
