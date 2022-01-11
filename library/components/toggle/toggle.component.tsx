import React from 'react';
import { useCss, a } from 'kremling';

import styles from './toggle.styles.scss';
import { Icon } from '../icon/icon.component';

type Props = {
  onChange: (isChecked: boolean) => void;
  checked: boolean;
  size?: 'sm' | 'md' | 'lg';
  uncheckedIcon?: string;
  checkedIcon?: string;
};

export function Toggle(props: Props) {
  const { onChange, checked, size = 'md', uncheckedIcon, checkedIcon } = props;
  const scope = useCss(styles);

  let iconSize;
  if (size === 'lg') {
    iconSize = 15;
  } else if (size === 'md') {
    iconSize = 11;
  }

  return (
    <div
      {...scope}
      className={a('sui-toggle').a(`--${size}`).m('--active', checked)}
      onClick={() => onChange(!checked)}
    >
      <input type="checkbox" onChange={() => {}} checked={checked} />
      {size !== 'sm' && uncheckedIcon && (
        <Icon name={uncheckedIcon} className="left-icon" size={iconSize} />
      )}
      {size !== 'sm' && checkedIcon && (
        <Icon name={checkedIcon} className="right-icon" size={iconSize} />
      )}
    </div>
  );
}

Toggle.propTypes = {};
