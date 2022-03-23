import React from 'react';
import { useCss, k, a } from 'kremling';

export function FormMessage({ children, type }) {
  const scope = useCss(css);
  return (
    <div
      {...scope}
      className={a('form-message').m('form-message--error', type === 'error')}
    >
      {children}
    </div>
  );
}

FormMessage.propTypes = {};

const css = k`
  .form-message {
    font-weight: 500;
    
    &.form-message--error {
      color: var(--color-form-error-message-text);
    }
  }
`;
