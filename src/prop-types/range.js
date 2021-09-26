export function range(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') throw new Error('[range] proptype requires min and max arguments to be numbers');
  if (min >= max) throw new Error(`[range] proptype requires the 'max' argument be larger then 'min'`)
  return function (props, propName, componentName) {
    const val = props[propName];
    if (val < min || val > max) {
      return new Error(
        `Invalid prop '${propName}' supplied to '${componentName}'. Requires a number range between ${min} and ${max}.`
      );
    }
  }
}
