import React from 'react';

export function Section({ children, ...rest }) {
  return (
    <div className="sui-mb-16" {...rest}>
      {children}
    </div>
  );
}
