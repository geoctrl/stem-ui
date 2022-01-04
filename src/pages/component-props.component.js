import React from 'react';
import { useCss, k } from 'kremling';

export function ComponentProps({ props }) {
  const scope = useCss(css);
  console.log(props)
  return (
    <div {...scope}>
    </div>
  );
}

ComponentProps.propTypes = {};

const css = k`
  
`;
