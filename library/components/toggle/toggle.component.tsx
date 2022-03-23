import React from 'react';
import { useCss, k, a } from 'kremling';

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
  const scope = useCss(css);

  let iconSize;
  if (size === 'lg') {
    iconSize = 15;
  } else if (size === 'md') {
    iconSize = 11;
  }

  return (
    <div
      {...scope}
      className={a('toggle').a(`--${size}`).m('--active', checked)}
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

const css = k`
  $space: 4rem;

  @include generateThemeVariables((
    toggle-bg: (light: $light-300, dark: $dark-300),
  ));


  .toggle {
    display: inline-flex;
    vertical-align: middle;
    background-color: var(--toggle-bg);
    position: relative;
    cursor: pointer;
    transition: background-color ease 200ms;

    input {
      display: none;
    }

    .left-icon {
      position: absolute;
      z-index: 1;
      color: $dark-100;
    }

    .right-icon {
      position: absolute;
      z-index: 1;
      opacity: .5;
    }

    &::after {
      content: '';
      border-radius: 50%;
      background-color: $light-900;
      position: absolute;
      transition: transform ease 200ms;
      top: $space;
      left: $space;
    }

    &.--active {
      background-color: $primary;

      .left-icon {
        opacity: .4;
        color: $dark-900;
      }

      .right-icon {
        opacity: 1;
        color: $dark-100;
      }
    }

    &.--sm {
      $width: 36rem;
      $height: 20rem;
      $circle-scale: $height - ($space * 2);
      $translate: $width - ($space * 2) - $circle-scale;
      width: $width;
      height: $height;
      border-radius: 20rem;

      &::after {
        width: calc(#{$height} - #{$space * 2});
        height: calc(#{$height} - #{$space * 2});
      }

      &.--active::after {
        transform: translateX($translate);
      }
    }

    &.--md {
      $width: 49rem;
      $height: 28rem;
      $circle-scale: $height - ($space * 2);
      $translate: #{$width - ($space * 2) - $circle-scale};
      width: $width;
      height: $height;
      border-radius: 20rem;

      .left-icon {
        top: 8rem;
        left: 8rem;
      }

      .right-icon {
        top: 8rem;
        right: 8rem;
      }

      &::after {
        width: $circle-scale;
        height: $circle-scale;
      }

      &.--active::after {
        transform: translateX($translate);
      }
    }

    &.--lg {
      $width: 64rem;
      $height: 36rem;
      $circle-scale: $height - ($space * 2);
      $translate: $width - ($space * 2) - $circle-scale;
      width: 64rem;
      height: $height;
      border-radius: 20rem;

      .left-icon {
        top: 10rem;
        left: 10rem;
      }

      .right-icon {
        top: 10rem;
        right: 10rem;
      }

      &::after {
        width: $circle-scale;
        height: $circle-scale;
      }

      &.--active::after {
        transform: translateX($translate);
      }
    }
  }
`;
