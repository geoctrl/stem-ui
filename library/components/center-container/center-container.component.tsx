import React from 'react';
import { useCss, a } from 'kremling';

import styles from './center-container.styles.scss';

type Props = {
  children?: React.ReactElement | React.ReactElement[],
  className?: string,
  maxWidth?: number,
}

export function CenterContainer(props: Props) {
  const { children, className, maxWidth } = props;
  const scope = useCss(styles);
  return (
    <div {...scope} className={a('sui-center-container').a(className)}>
      {children}
    </div>
  );
}

CenterContainer.propTypes = {};
