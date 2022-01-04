import * as React from 'react';
import { useCss, k } from 'kremling';

export function Props({ propTypes }) {
  const scope = useCss(css);
  return (
    <div {...scope}>

    </div>
  );
}

Props.propTypes = {};

const css = k`
  
`;
