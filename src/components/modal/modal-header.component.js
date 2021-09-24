import React, { useContext } from 'react';
import { useCss, k } from 'kremling';
import { ModalContext } from '@components/modal/modal.context';
import { Button } from '@components/button/button.component';

export function ModalHeader({ title }) {
  const scope = useCss(css);
  const { onClose } = useContext(ModalContext);
  return (
    <div {...scope} className="sui-modal--header">
      <h4>{title}</h4>
      <div>
        <Button onClick={onClose} iconOnly="xmark" btnType="flat" />
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
