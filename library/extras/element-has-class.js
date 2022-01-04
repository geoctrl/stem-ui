export function elementHasClass(element, classNames) {
  // if element doesn't exist, then we have reached the end of the DOM
  if (!element || !element.classList) return false;

  // check if element has any classNames
  const hasClassName = (typeof classNames === 'string' ? [classNames] : classNames)
    .reduce((acc, className) => acc || element.classList.contains(className), false)
  if (hasClassName) return true;

  // we don't have an answer yet, run it again
  return elementHasClass(element.parentNode, classNames);
}