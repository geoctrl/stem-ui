import { oneOf } from 'prop-types';

export const propTypes = {
  kind: {
    default: 'default',
    type: oneOf(['default', 'primary', 'secondary', 'important', 'danger', 'flat']),
    component: require('./proptype-kind'),
  },
};
