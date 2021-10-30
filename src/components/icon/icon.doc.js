import React from 'react';
import { useCss, k } from 'kremling';

import { Display } from '@doc-helpers/display.component';
import { Code } from '@doc-helpers/code.component';

export function Name() {
  const scope = useCss(css);
  return (
    <div {...scope}>
      <h3>name <span className="sub-text"><Code>string</Code></span></h3>
      <p>
        Name of the icon.
      </p>
      <Display
        component={require('./docs/example')}
        raw={require('./docs/example?raw')}
      />
    </div>
  );
}

export const props = [
  {
    name: 'name',
    render: Name,
  },
];

export default {
  name: 'Icon',
  path: '/icon',
  description: 'Icon',
};


const css = k`
  .button-kind button {
    margin-right: 8rem;
  }
`;
