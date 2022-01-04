import React from 'react';
import { useCss, k } from 'kremling';

import { Display } from '@doc-helpers/display.component';
import { Code } from '@doc-helpers/code.component';
import { Section } from 'stem-ui/components';

export function Block() {
  const scope = useCss(css);
  return (
    <Section {...scope}>
      <h3>block <span className="sub-text"><Code>string</Code></span></h3>
      <p>
        Fill width with button
      </p>
      <Display
        component={require('./docs/proptype-block')}
        raw={require('./docs/proptype-block?raw')}
      />
    </Section>
  );
}

export function Kind() {
  const scope = useCss(css);
  return (
    <Section {...scope}>
      <h3>kind <span className="sub-text"><Code>string</Code></span></h3>
      <p>
        Buttons support different "kinds" that changes its appearance. this
      </p>
      <Display
        component={require('./docs/proptype-kind')}
        raw={require('./docs/proptype-kind?raw')}
      />
    </Section>
  );
}


export const props = [
  {
    name: 'block',
    render: Block,
  },
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
