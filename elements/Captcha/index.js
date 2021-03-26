import ReCAPTCHA from 'react-google-recaptcha';

const Captcha = ({ setCaptchaPassed, language }) => {
  function onChangeRecaptcha(value) {
    setCaptchaPassed(value);
  }

  return (
    <>
      {language ? (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
          onChange={onChangeRecaptcha}
          hl={language}
        />
      ) : (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY}
          onChange={onChangeRecaptcha}
          hl="ru"
        />
      )}
    </>
  );
};

export default Captcha;
