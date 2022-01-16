import { useEffect, useMemo } from 'react';

export const hideOnEsc = {
  name: 'hideOnEsc',
  defaultValue: true,
  fn({ hide }: any) {
    function onKeyDown(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        hide();
      }
    }
    return {
      onShow: () => document.addEventListener('keydown', onKeyDown),
      onHide: () => document.removeEventListener('keydown', onKeyDown),
    };
  },
};

export function useAutoDisable(
  disabled: boolean,
  isOpen: boolean,
  close: () => void
) {
  useEffect(() => {
    if (disabled && isOpen) {
      close();
    }
  }, [disabled]);
}

export function useContentWidth(contentWidth: string | number) {
  return useMemo(() => {
    let width;
    if (typeof contentWidth === 'number') {
      width = contentWidth;
    } else if (contentWidth === 'small') {
      width = '180px';
    } else if (contentWidth === 'medium') {
      width = '280px';
    } else if (contentWidth === 'large') {
      width = '400px';
    } else {
      width = 'auto';
    }
    return width;
  }, [contentWidth]);
}
