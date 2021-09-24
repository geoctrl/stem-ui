import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CpButton, CpCard, CpDropdown, CpModal } from '@components';
import { createPortal } from 'react-dom';
import { CopyableCode } from '@story-resources';

export default {
  title: "Helpers/clickEventStack",
};

export const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="small-box">
      <div className="sb">
        <h1><code>clickEventStack</code></h1>
        <p>
          Handle window clicks using FILO (first in last out).
        </p>
        <p>
          <strong>Note:</strong> This helper manipulates window clicks to control when elements should close. Most likely,
          you probably don't even need it - it's already implemented
          in <code>CpDropdown</code>, <code>CpModal</code>, and <code>CpOverlay</code>. <code>primary-navbar</code> also
          uses it, to prevent closing when modals open.
        </p>

        <h3>The Problem</h3>
        <p>
          Components that rely on global clicks (eg: <code>window.addEventListener</code>) are unaware of each other. So
          if one component opens another, a simple global click could close both.
        </p>
        <p>
          Take the following example:
        </p>
      </div>

      <div className="cp-mb-16">
        <DropdownExample
          name="Dropdown 1"
          content={<DropdownExample name="Dropdown 2" content="Content" />}
        />
      </div>

      <div className="sb">
        <p>
          This works because we use a simple hierarchy check to make sure we're closing the right thing. But what if
          we use react portal to render our content outside of the dropdown container?
        </p>
      </div>

      <div className="cp-mb-16">
        <DropdownPortalExample
          name="Dropdown Portal 1"
          content={<DropdownPortalExample name="Dropdown Portal 2" content="Content" />}
        />
      </div>

      <div className="sb">
        <p>
          <strong>This does not work.</strong> The dropdown is unaware that a click is happening inside of its content.
        </p>
        <p>
          This is just a limited example - the reach of the problem extends into modals, overlays, and
          other elements that listen in on window clicks.
        </p>
      </div>

      <div className="sb">
        <h3>The Solution</h3>
        <p>
          <code>clickEventStack</code> contains a single "click" event listener on the window - each component that
          needs access to that listener adds a callback, and the helper only fires events on the latest one.
        </p>
        <p>
          The following example shows how a <code>CpDropdown</code> within a <code>CpDropdown</code> works now - even
          when they both use portals by default:
        </p>
      </div>

      <div className="cp-mb-16">
        <CpDropdown
          contentWidth="lg"
          allowContentClicks
          renderTrigger={({ toggle }) => (
            <CpButton onClick={toggle}>CpDropdown using clickEventStack</CpButton>
          )}
          renderContent={() => (
            <div className="cp-p-16">
              <CpDropdown
                appendTo={document.body}
                contentWidth="lg"
                allowContentClicks
                renderTrigger={({ toggle }) => (
                  <CpButton onClick={toggle}>CpDropdown using clickEventStack</CpButton>
                )}
                renderContent={() => (
                  <div className="cp-p-16">
                    Content
                  </div>
                )}
              />
            </div>
          )}
        />
      </div>

      <div className="sb">
        <p>
          <strong>It works!</strong> This also makes it easy to keep dropdowns open when a modal opens
          so users can keep context on what they're working on:
        </p>
      </div>

      <div className="cp-mb-32">
        <CpDropdown
          contentWidth="md"
          allowContentClicks
          renderTrigger={({ toggle }) => (
            <CpButton onClick={toggle}>Do Some work</CpButton>
          )}
          renderContent={() => (
            <div className="cp-p-16">
              <CpButton onClick={() => setShowModal(true)}>Open modal</CpButton>
            </div>
          )}
        />
      </div>

      <div className="sb">
        <h3>Implement</h3>
        <p>
          The <code>clickEventStack</code> was built to be a simple drop-in replacement for <code>window.addEventListener</code>, so instead of doing
          something like this:
        </p>
        <CopyableCode code={
`useEffect(() => {
  window.addEventListener('click', clickHandler);
  return () => {
    window.removeEventListener('click', clickHandler);
  }
}, []);`
        } />
        <p>
          You do the following instead:
        </p>
        <CopyableCode code={
`useEffect(() => {
  const listener = clickEventStack.add(clickHandler);
  return () => listener.remove();
}, []);`
        } />

        <p>
          With this tiny bit of code, your element will now block clicks for all the other elements in its stack.
        </p>

      </div>

      <CpModal show={showModal} onClose={() => setShowModal(false)}>
        <CpModal.Header title="Modal Example" />
        <CpModal.Body>
          <div>Clicking won't close the dropdown!</div>
          <div>
            However, once you close the modal, the "clicking focus" is now on the dropdown, so clicking
            outside of the dropdown will close it again.
          </div>
        </CpModal.Body>
        <CpModal.Footer>
          <CpButton onClick={() => setShowModal(false)}>Close</CpButton>
        </CpModal.Footer>
      </CpModal>
    </div>
  )
};


function DropdownExample({ name, content }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const outsideRef = useRef();
  const close = useCallback((e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    addEventListener('click', close);
    return () => removeEventListener('click', close);
  }, []);

  return (
    <div ref={outsideRef}>
      <div ref={dropdownRef} style={{ position: 'relative' }}>
        <CpButton onClick={() => setOpen(!open)}>{name}</CpButton>
        {open && (
          <CpCard className="cp-p-32" style={{ position: 'absolute', zIndex: 10 }}>
            {content}
          </CpCard>
        )}
      </div>
    </div>
  );
}

function DropdownPortalExample({ name, content }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const outsideRef = useRef();
  const close = useCallback((e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    addEventListener('click', close);
    return () => removeEventListener('click', close);
  }, []);

  return (
    <div ref={outsideRef}>
      <div ref={dropdownRef} style={{ position: 'relative' }}>
        <CpButton onClick={() => setOpen(!open)}>{name}</CpButton>
        {open && createPortal(
          <CpCard className="cp-p-32" style={{ position: 'absolute', zIndex: 10 }}>
            {content}
          </CpCard>
        , outsideRef.current)}
      </div>
    </div>
  );
}