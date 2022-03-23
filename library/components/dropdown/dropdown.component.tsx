import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  ReactElement,
} from 'react';
import { useCss, k, a } from 'kremling';
import { createPortal } from 'react-dom';
import Tippy from '@tippyjs/react/headless';
import type { Instance, Props as TippyProps, Placement } from 'tippy.js';

import { useIsMounted } from '../../hooks/use-is-mounted.hook';
import { useContentWidth, useAutoDisable, hideOnEsc } from './dropdown.utils';

type Props = {
  appendTo?: 'parent' | Element | ((ref: Element) => Element);
  allowContentClicks?: boolean;
  contentHeight?: 'auto' | number;
  contentWidth?: 'small' | 'medium' | 'large' | 'block' | number;
  cover?: boolean;
  disabled?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  placement?: Placement;
  preventOutsideClickUntilClosed?: boolean;
  renderContent?: (opts: any) => ReactElement;
  renderTrigger?: (opts: any) => ReactElement;
};

export function Dropdown(props: Props) {
  const {
    allowContentClicks = false,
    appendTo = document.body,
    contentHeight = 'auto',
    contentWidth = 'small',
    cover,
    disabled,
    placement = 'bottom-start',
    onClose,
    onOpen,
    preventOutsideClickUntilClosed,
    renderContent,
    renderTrigger,
  } = props;

  const scope = useCss(css);
  const unmountTimeoutRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [instance, setInstance] = useState<Instance | null>(null);
  const isMounted = useIsMounted();
  const calculatedContentWidth = useContentWidth(contentWidth);

  const documentClickHandler = useCallback(
    (e) => {
      if (!instance) {
        return;
      }
      // pressing the trigger - don't do anything
      if (instance.reference.contains(e.target)) {
        return;
      }
      const contains = instance.popper.contains(e.target);
      if ((contains && !allowContentClicks) || !contains) {
        instance?.hide();
      }
    },
    [instance, allowContentClicks]
  );

  function close() {
    if (!preventOutsideClickUntilClosed) {
      document.removeEventListener('click', documentClickHandler);
    }
    instance?.hide();
  }

  useEffect(
    () => () => {
      if (!preventOutsideClickUntilClosed) {
        document.removeEventListener('click', documentClickHandler);
      }
    },
    []
  );

  function open() {
    instance?.show();
  }

  function toggle() {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }

  function onShow({ popper, reference }: Instance) {
    if (instance) {
      setIsOpen(true);
      if (onOpen) {
        onOpen();
      }
      if (contentWidth === 'block') {
        if (placement.includes('left') || placement.includes('right')) {
          popper.style.height = `${
            reference.getBoundingClientRect().height / 10
          }rem`;
        } else {
          popper.style.width = `${
            reference.getBoundingClientRect().width / 10
          }rem`;
        }
      }
      if (!preventOutsideClickUntilClosed) {
        document.addEventListener('click', documentClickHandler);
      }
    }
  }

  function onHide() {
    if (isMounted.current) {
      setIsOpen(false);
      if (onClose) {
        onClose();
      }
    }
  }

  function onMount() {
    if (unmountTimeoutRef.current) {
      clearTimeout(unmountTimeoutRef.current);
    }
  }

  const coverOffset: TippyProps['offset'] = [0, 0];
  if (cover && instance) {
    const rect = instance.reference.getBoundingClientRect();
    if (placement.includes('bottom') || placement.includes('top')) {
      coverOffset[1] = rect.height * -1;
    } else if (placement.includes('left') || placement.includes('right')) {
      coverOffset[1] = rect.width * -1;
    }
  }

  useAutoDisable(disabled, isOpen, close);

  return (
    <Tippy
      allowHTML
      appendTo={appendTo}
      disabled={disabled}
      hideOnClick={false}
      interactive
      offset={coverOffset}
      onCreate={setInstance}
      onHide={onHide}
      onMount={onMount}
      onShow={onShow}
      maxWidth={240}
      placement={placement}
      plugins={[hideOnEsc]}
      trigger="manual"
      zIndex={999}
      render={(attrs) => (
        <>
          {preventOutsideClickUntilClosed &&
            isOpen &&
            createPortal(
              <button
                type="button"
                aria-label="color"
                className="dropdown__prevent-click"
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
              />,
              document.body
            )}
          <div
            {...attrs}
            {...scope}
            className={a('dropdown').m('dropdown--is-open', isOpen)}
            tabIndex={-1}
            style={{
              maxHeight: contentHeight,
              width: calculatedContentWidth,
            }}
          >
            {renderContent?.({ isOpen, close })}
            <div className="tooltip-arrow" data-popper-arrow="" />
          </div>
        </>
      )}
    >
      {renderTrigger &&
        renderTrigger?.({
          isOpen,
          toggle,
          open,
          close,
        })}
    </Tippy>
  );
}

const css = k`
  .dropdown {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 2px 6px 0 rgba(0, 0, 0, 0.26);
    cursor: default;
    overflow: auto;
  }
`;
