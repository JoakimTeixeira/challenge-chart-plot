import React from 'react';
import { node } from 'prop-types';
import { SplitContainer, Separator } from './styles';

export const SplitPane = ({ children }) => {
  SplitPane.propTypes = {
    children: node.isRequired,
  };

  return (
    <SplitContainer>
      {children[0]}
      <Separator />
      {children[1]}
    </SplitContainer>
  );
};

SplitPane.Top = function SplitPaneTop() {
  return <div className="split-pane-top" />;
};

SplitPane.Bottom = function SplitPaneBottom() {
  return <div className="split-pane-bottom" />;
};
