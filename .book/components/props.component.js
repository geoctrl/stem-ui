import React from 'react';
import { useCss, k } from 'kremling';

export function Props({ propTypes }) {
  const scope = useCss(css);
  console.log(propTypes)
  return (
    <div {...scope}>

    </div>
  );
}

Props.propTypes = {};

const css = k`
  
`;
