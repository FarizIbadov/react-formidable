const deepCopy = (inObject: any) => {
  let outObject: any, value: any, key: any;

  if (
    typeof inObject !== "object" ||
    inObject === null ||
    inObject instanceof File
  ) {
    return inObject;
  }
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];
    outObject[key] = deepCopy(value);
  }

  return outObject;
};

export default deepCopy;
