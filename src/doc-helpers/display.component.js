import React, { useState } from 'react';
import { useCss, k, a } from 'kremling';
// import { Code } from '@doc-helpers/code.component';
import { Button, CenterContainer } from 'stem-ui/components';

export function Display({ component, raw }) {
  const scope = useCss(css);
  const [showCode, setShowCode] = useState(false);
  const Comp = component?.default || component;
  return (
    <div
      {...scope}
      className={
        a('display')
          .m('display--has-code', !!raw && !showCode)
          .m('display--show-code', showCode)
      }
    >
      <div className="display__view">
        <Comp />
      </div>
      {raw && showCode && (
        <div className="display__code">
          {/*<Code pre>{raw}</Code>*/}
          <Button
            onClick={() => setShowCode(false)}
            className="display__code-close"
            kind="flat"
            iconOnly="times"
            small
          />
        </div>
      )}
      {!showCode && (
        <div className="show-code">
          <Button
            small
            iconOnly="code"
            kind="flat"
            onClick={() => setShowCode(true)}
          />
        </div>
      )}
    </div>
  );
}

Display.propTypes = {};

const css = k`
  .display {
    position: relative;
    margin-bottom: 16rem;
    
    .display__view {
      position: relative;
      border: solid 1rem var(--color-display-border);
      padding: 16rem;
      border-radius: var(--sui-border-radius);
      background-color: white;
      
      .display__view-button button {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
    
    &.display--has-code .display__view {
      //padding-bottom: 36rem;
    }
    
    .display__code {
      position: relative;
      padding: 16rem;
      border-radius: 0 0 var(--sui-border-radius) var(--sui-border-radius);
      background: var(--sui-color-type-code-bg);
    }
    
    &.display--show-code .display__view {
      border-radius: var(--sui-border-radius) var(--sui-border-radius) 0 0;
    }
    
    .display__code-close {
      position: absolute;
      top: 16rem;
      right: 16rem;
    }

    .show-code {
      position: absolute;
      top: 16rem;
      right: 16rem;
    }
  }
`;
