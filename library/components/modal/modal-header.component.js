import * as React from 'react';
import { useCss, k } from 'kremling';

import { ModalContext } from './modal.context';
import { Button } from '../button/button.component.tsx';

export function ModalHeader({ title }) {
  const scope = useCss(css);
  const { onClose } = React.useContext(ModalContext);
  return (
    <div {...scope} className="sui-modal--header">
      <h4>{title}</h4>
      <div>
        <Button onClick={onClose} iconOnly="times" btnType="flat" />
      </div>
    </div>
  );
}

ModalHeader.propTypes = {};

const css = k`
  .sui-modal--header {
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 8rem 8rem 0 16rem;
    margin-bottom: 16rem;
  }
`;
