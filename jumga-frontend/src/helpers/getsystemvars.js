/**retrieve a value by key from systemvar object
 *
 * @param object systemvarData
 * @param string name
 */
const extractsysvars = (systemvarData, name) => {
  return systemvarData.body?.data.systemvars[name] !== undefined
    ? systemvarData.body?.data.systemvars[name]
    : "";
};
export default extractsysvars;
