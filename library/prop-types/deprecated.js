export function deprecated(validator, options) {
  const {
    showWarning = true,
    message = '',
  } = options;
  return function deprecated(props, propName, componentName, ...rest) {
    if (!!props[propName]) {
      if (showWarning) console.warn(`Invalid prop '${propName}' supplied to '${componentName}' - '${propName}' is deprecated. ${message}`);
    }
    return validator(props, propName, componentName, ...rest);
  }
}
