export const writeCookie = (key, value, days = 30) => {
  let date = new Date();

  date.setDate(date.getDate() + 30);

  const cookie = (document.cookie =
    key + "=" + value + "; expires" + date.toGMTString() + "; path=/");
  //

  return cookie;
};

export const getTokenFromCookie = (cookieName) => {
  const expression = new RegExp(`(?<=${cookieName}=)[^;]*`);
  console.log("Expression: ", expression);

  const cookie = document.cookie.match(expression);
  console.log(cookie);
  return cookie;
};
