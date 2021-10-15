import React, { useEffect, useState } from 'react';
import { useCss, k } from 'kremling';
import Prism from 'prismjs';
import { string } from 'prop-types';

export function Code({ children, pre }) {
  const scope = useCss(css);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    const html = Prism.highlight(children, Prism.languages.jsx, 'jsx');
    setHighlightedCode(html);
  }, [children]);

  const Wrapper = ({ children }) => pre ? <pre className="language-javascript">{children}</pre> : <>{children}</>;

  return (
    <Wrapper>
      <code className="language-javascript" {...scope} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </Wrapper>
  );
}

Code.propTypes = {
  code: string,
};

const css = k`
  
`;
