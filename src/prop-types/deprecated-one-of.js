import { oneOf } from 'prop-types';

export function deprecatedOneOf(newValues, oldValues, message) {
  return function deprecatedOneOf(props, propName, componentName, ...rest) {
    if (oldValues.includes(props[propName])) {
      console.warn(
`Invalid 'oneOf' prop option supplied to '${componentName}' - The option "${props[propName]}" is deprecated within the prop "${propName}".
Please use one of the following options instead:
${JSON.stringify(newValues)}${message ? `\n\n${message}` : ''}`
      );
    }
    return oneOf([...newValues, ...oldValues])(props, propName, componentName, ...rest);
  }
}
