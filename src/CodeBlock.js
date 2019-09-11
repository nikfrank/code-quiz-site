import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ code }) => (
  <SyntaxHighlighter language='javascript' style={docco}>
    {code}
  </SyntaxHighlighter>
);

export default CodeBlock;
