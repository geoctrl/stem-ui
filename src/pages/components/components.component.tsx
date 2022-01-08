import React from 'react';
import { useCss, a } from 'kremling';

import { Button } from 'stem-ui/components';
import styles from './components.styles.scss';

declare type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export function Components(props: Props) {
  const { className } = props;
  const scope = useCss(styles);
  return (
    <div {...scope} className={a(className).a('temp')}>
      <Button text="Submit" kind="primary" />
    </div>
  );
}
