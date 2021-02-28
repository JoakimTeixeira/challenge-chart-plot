import { SplitPane } from 'components/SplitPane';
import React from 'react';
import { GlobalStyle } from 'styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <SplitPane>
        <SplitPane.Top />
        <SplitPane.Bottom />
      </SplitPane>
    </>
  );
}

export default App;
