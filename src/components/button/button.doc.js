import React from 'react';
import { useCss, k } from 'kremling';

import { Display } from '@doc-helpers/display.component';
import { Code } from '@doc-helpers/code.component';

export function Kind() {
  const scope = useCss(css);
  return (
    <div {...scope}>
      <h3>kind <span className="sub-text"><Code>string</Code></span></h3>
      <p>
        Buttons support different "kinds" that changes its appearance. this
      </p>
      <Display
        component={require('./docs/proptype-kind')}
        raw={require('./docs/proptype-kind?raw')}
      />
      <h3>small <span className="sub-text"><Code>boolean</Code></span></h3>
    </div>
  );
}

export const props = [
  {
    name: 'kind',
    render: Kind,
  },
];

export default {
  name: 'Button',
  path: '/button',
  description: 'A Button triggers an action or an event.',
};


const css = k`
  .button-kind button {
    margin-right: 8rem;
  }
`;
