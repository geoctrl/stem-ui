import React from 'react';
import { useCss } from 'kremling';

import styles from './toggle.styles.scss';

type Props = {
  onChange: (isChecked: boolean) => void;
  checked: boolean;
};

export function Toggle(props: Props) {
  const { onChange, checked } = props;
  const scope = useCss(styles);
  return (
    <div {...scope} className="sui-toggle">
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
      />
    </div>
  );
}

Toggle.propTypes = {};
