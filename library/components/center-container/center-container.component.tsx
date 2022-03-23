import React from 'react';
import { useCss, k, a } from 'kremling';

type Props = {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  maxWidth?: number;
};

export function CenterContainer(props: Props) {
  const { children, className, maxWidth } = props;
  const scope = useCss(css);
  return (
    <div {...scope} className={a('sui-center-container').a(className)}>
      {children}
    </div>
  );
}

CenterContainer.propTypes = {};

const css = k`
  @import "breakpoints";
  .sui-center-container {
    width: 100%;
    padding: 0 16rem;

    @include breakpoint(xxl) {
      width: breakpointSize(xxl);
      margin: auto;
    }
  }
`;
