export const loadRecaptcha = () => {
  const script = document.createElement("script");

  script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY}`;
  script.id = "recaptcha-script";
  script.async = true;

  document.body.append(script);
};

export const removeRecaptcha = () => {
  const script = document.getElementById("recaptcha-script");
  if (script) {
    script.remove();
  }

  const recaptchaElems = document.getElementsByClassName("grecaptcha-badge");
  if (recaptchaElems.length) {
    recaptchaElems[0].remove();
  }
};
