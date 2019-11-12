export const flatten = (obj = {}) => {
  return Object.keys(obj).reduce((newObj, key) => {
    const value = obj[key];

    if (Array.isArray(value)) {
      newObj[key] = obj[key].join(`; ${key}:`)
    } else {
      newObj[key] = value;
    }
    return newObj;
  }, {});
};
