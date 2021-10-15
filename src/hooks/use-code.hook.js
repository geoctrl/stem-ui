import { useMemo, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

function useCode(code) {
  return highlightedCode;
}
