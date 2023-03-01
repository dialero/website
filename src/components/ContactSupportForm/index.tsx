import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Spacer, Textarea } from '@nextui-org/react';
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSupportForm(): JSX.Element {
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
    const url = 'https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8';
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
        <input
          type="hidden"
          name="retURL"
          value="http://help.dialero.com/dialero_contact_support.html?sent=true"
        />
        <h3>Please fill in your contact information and describe your issue</h3>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input {...field} placeholder="Name" status={errors && errors.name ? 'error' : null} />
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
            />
          )}
        />
        <Spacer y={0.5} />
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Subject"
              status={errors && errors.subject ? 'error' : null}
            />
          )}
        />
        <Spacer y={0.5} />
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            // <Input type="textarea" />
            <Textarea {...field} maxLength={500} rows={7} placeholder="Describe your issue" />
          )}
        />
        <Spacer y={0.5} />
        <div className="g-recaptcha" data-sitekey="6Ld7XDUUAAAAABxymJikCkzen8dDbHrFBtGrIdCk"></div>
        <button type="submit" className="button button--primary">
          Submit
        </button>
      </form>
    </>
  );
}
