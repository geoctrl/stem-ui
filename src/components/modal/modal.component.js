import * as React from 'react';
import { useCss, a } from 'kremling';
import { ModalBody } from './modal-body.component';
import { ModalHeader } from './modal-header.component';
import { ModalFooter } from './modal-footer.component';
import { ModalContext } from './modal.context';
import { useIsMounted } from '../../hooks/use-is-mounted.hook';

const { useEffect, useState } = React;

const modalAnimationDuration = 600;
const modalWidth = 428;

export function Modal({ children, show, onClose, onAfterOpen, onAfterClose }) {
  const scope = useCss(css);
  const [isVisible, setIsVisible] = useState(show);
  const [isAnimatedIn, setIsAnimatedIn] = useState(false);
  const isMounted = useIsMounted().current;

  useEffect(() => {
    if (show && !isVisible) {
      setIsVisible(true);
      setTimeout(() => {
        if (isMounted) onAfterOpen?.();
        setIsAnimatedIn(true);
      }, modalAnimationDuration);
    }
    if (!show && isVisible) {
      setTimeout(() => {
        if (isMounted) {
          onAfterClose?.();
          setIsVisible(false);
        }
      }, modalAnimationDuration - 50);
    }
  }, [show]);

  function close() {
    onClose();
    setIsAnimatedIn(false);
  }

  if (!isVisible) return null;
  return (
    <ModalContext.Provider value={{ onClose: close }}>
      <div
        {...scope}
        className={
          a('sui-modal-wrapper')
            .m('sui-modal-wrapper--animate-out', !show)
            .m('sui-modal-wrapper--animate-in', show)
        }
      >
        <div className="sui-modal-backdrop" onClick={isAnimatedIn ? close : null} />
        <div className="sui-modal">
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}


Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;


// language=scss
const css = `
  & .sui-modal-wrapper {
    position: fixed;
    z-index: 999;
    inset: 0;
    perspective: 400rem;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
  & .sui-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 0;
    background-color: rgba(0,0,0, .2);
  }
    
  & .sui-modal {
    position: relative;
    background-color: #fff;
    width: ${modalWidth}rem;
    margin: 32rem auto;
    z-index: 1;
    box-shadow: 0 10rem 50rem rgba(0,0,0,.3), 0 2rem 8px 2px rgba(0,0,0,.07);
    border-radius: var(--sui-border-radius);
    height: 400rem;
    transform-origin: center center;
  }

  & .sui-modal--body {
    padding: 16rem;
  }


  & .sui-modal-wrapper--animate-in {
    animation: modalFadeIn ${modalAnimationDuration}ms ease;
  }

  & .sui-modal-wrapper--animate-in .sui-modal {
    animation: modalTranslateIn ${modalAnimationDuration}ms ease;
  }

  & .sui-modal-wrapper--animate-out {
    animation: modalFadeOut ${modalAnimationDuration}ms ease;
  }

  & .sui-modal-wrapper--animate-out .sui-modal {
    animation: modalTranslateOut ${modalAnimationDuration}ms ease;
  }


  @keyframes modalFadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes modalFadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes modalTranslateIn {
    0% {
      transform: rotateX(-3deg) scale(.9);
    }

    100% {
      transform: rotateX(0) scale(1);
    }
  }

  @keyframes modalTranslateOut {
    0% {
      transform: rotateX(0) scale(1);
    }

    100% {
      transform: rotateX(-3deg) scale(.9);
    }
  }

`;
