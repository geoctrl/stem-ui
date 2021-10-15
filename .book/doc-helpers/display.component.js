import React, { useState } from 'react';
import { useCss, k, a } from 'kremling';
import { Code } from '@doc-helpers/code.component';
import { Button } from 'stem-ui/components';

export function Display({ component, raw }) {
  const scope = useCss(css);
  const [showCode, setShowCode] = useState(false);
  const Comp = component?.default || component;
  return (
    <div {...scope} className={a('display').m('display--has-code', !!raw && !showCode)}>
      <div className="display__view">
        <Comp />
      </div>
      {raw && showCode && (
        <div className="display__code">
          <Code pre>{raw}</Code>
          <Button
            onClick={() => setShowCode(false)}
            className="display__code-close"
            kind="flat"
            iconOnly="times"
            small
          />
        </div>
      )}
      <div>
        <Button
          small
          iconOnly="code"
          kind="flat"
          onClick={() => setShowCode(true)}
        />
      </div>
    </div>
  );
}

Display.propTypes = {};

const css = k`
  .display {
    .display__view {
      margin-bottom: 16rem;
      position: relative;
      border: solid 1rem var(--book-color-display-border);
      padding: 16rem;
      border-radius: var(--sui-border-radius);
      
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
    }
    
    .display__code-close {
      position: absolute;
      top: 16rem;
      right: 16rem;
    }
  }
`;
