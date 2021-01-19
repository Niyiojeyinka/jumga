const generateShortCode = () => {
  const availChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < 15; i++) {
    let randomPositon = Math.floor(Math.random() * availChars.length);
    randomString += availChars.substring(randomPositon, randomPositon + 1);
  }
  return randomString;
};

export default generateShortCode;
