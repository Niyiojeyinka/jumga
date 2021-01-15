const extractsysvars = (systemvarData, name) => {
  return systemvarData.body?.data.systemvars[name] != undefined
    ? systemvarData.body?.data.systemvars[name]
    : "";
};
export default extractsysvars;
