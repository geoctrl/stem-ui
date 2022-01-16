import React from 'react';
import { useCss, k, a } from 'kremling';

export function Input(props) {
  const { inline } = props;
  const scope = useCss(css);
  return (
    <div {...scope} className={a('sui-input').m('sui-input--inline', inline)}>
      <input />
    </div>
  );
}

Input.propTypes = {};

const css = k`
  .sui-input {
    position: relative;
    
    &::after {
      pointer-events: none;
      content: '';
      position: absolute;
      inset: 0;
      border: solid 2rem transparent;
      transition: border-color 100ms ease;
      border-radius: 10rem;
    }

    input {
      border: solid 1rem var(--#{$root-prefix}-color-input-border);
      border-radius: 10rem;
      height: var(--#{$root-prefix}-form-height-md);
      box-shadow: var(--#{$root-prefix}-form-box-shadow);
      box-sizing: border-box;
      padding: 0 16rem;
      display: block;
      width: 100%;
      transition: box-shadow 100ms ease;
      background-color: var(--#{$root-prefix}-color-input-bg);
      color: var(--#{$root-prefix}-color-input-text);
      font-size: inherit;

      &:focus {
        outline: none;
        box-shadow: var(--#{$root-prefix}-form-focus-state);
      }
    }
    
    &:focus-within::after {
      border-color: var(--#{$root-prefix}-color-primary-100);
    }
    
    &.sui-input--inline {
      
    }
  }
`;
