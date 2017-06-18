export function arrayToObj(array) {
  return array.reduce((obj, e) => {
    obj[e.id] = e;
    return obj;
  }, {});
}
