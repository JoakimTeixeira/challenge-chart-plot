import Input from 'components/Input';
import Chart from 'components/Chart';
import { SplitPane } from 'components/SplitPane';
import React from 'react';
import { GlobalStyle } from 'styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <SplitPane>
        <Input />
        <Chart />
      </SplitPane>
    </>
  );
}

export default App;
