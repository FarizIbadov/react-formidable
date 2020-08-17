const typeChecker = {
  file: isFile,
  string: isString,
  number: isNumber,
  email: isEmail,
};

function isFile(value: any) {
  return value instanceof File;
}

function isString(value: any) {
  const rule = /^[a-zA-Z]+$/;
  return rule.test(value);
}

function isNumber(value: any) {
  const rule = /^[0-9]+$/;
  return rule.test(value);
}

function isEmail(value: any) {
  const rule = /^[a-zA-Z0-9!#$&_*?^{}~-]+(\.[a-zA-Z0-9!#$&_*?^{}~-]+)*@([a-z0-9]+([a-z0-9-]*)\.)+[a-zA-Z]+$/;
  return rule.test(value);
}

export default typeChecker;
