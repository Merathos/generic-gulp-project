import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = ({ setCaptchaPassed }) => {
  function onChangeRecaptcha(value) {
    setCaptchaPassed(value);
  }

  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
      onChange={onChangeRecaptcha}
    />
  );
};

export default Captcha;
