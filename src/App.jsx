import Input from 'components/Input';
import Chart from 'components/Chart';
import { SplitPane } from 'components/SplitPane';
import React from 'react';
import { GlobalStyle } from 'styles/global';
import { SplitPaneProvider } from 'contexts/SplitPaneContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <SplitPaneProvider>
        <SplitPane>
          <Input />
          <Chart />
        </SplitPane>
      </SplitPaneProvider>
    </>
  );
}

export default App;
