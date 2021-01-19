import request from "./request";
/** convert with flw fx rate
 *
 * @param {*} from
 * @param {*} to
 * @param {*} amount
 */
const convert = async (from, to, amount) => {
  const res = await request("payments/fx", "POST", {
    from,
    to,
    amount,
  });
  if (res.status == 200) {
    return res.body.data.to.amount;
  }
  return false;
};
export default convert;
