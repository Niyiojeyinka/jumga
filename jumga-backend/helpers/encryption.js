/** This is the encryption function that encrypts your payload by passing the stringified format and your encryption Key.
 *
 * @param {*} key flutterwave encryption key
 * @param {*} text payload stringify payload
 */
exports.flwEncrypt = (key, text) => {
  var forge = require("node-forge");
  var cipher = forge.cipher.createCipher(
    "3DES-ECB",
    forge.util.createBuffer(key)
  );
  cipher.start({ iv: "" });
  cipher.update(forge.util.createBuffer(text, "utf-8"));
  cipher.finish();
  var encrypted = cipher.output;
  return forge.util.encode64(encrypted.getBytes());
};
