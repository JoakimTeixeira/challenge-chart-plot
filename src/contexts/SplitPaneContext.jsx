import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

export const SplitPaneContext = createContext();

export const SplitPaneProvider = ({ children }) => {
  SplitPaneProvider.propTypes = { children: node.isRequired };

  const [topHeight, setTopHeight] = useState(null);

  const handleTopHeight = (height) => {
    setTopHeight(height);
  };

  return (
    <SplitPaneContext.Provider value={{ topHeight, handleTopHeight }}>
      {children}
    </SplitPaneContext.Provider>
  );
};
