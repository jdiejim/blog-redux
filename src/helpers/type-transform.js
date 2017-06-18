export function arrayToObj(array) {
  return array.reduce((obj, e) => {
    obj[e.id] = e;
    return obj;
  }, {});
}

export function objToArray(obj) {
  const keys = Object.keys(obj);
  return keys.map(e => obj[e]);
}

export function cloneObjOmitKey(obj, key) {
  const newObj = Object.assign({}, obj);

  delete newObj[key];
  return newObj;
}
