import React from 'react';
import { node } from 'prop-types';
import { SplitContainer, Separator } from './styles';

export const SplitPane = ({ children }) => {
  SplitPane.propTypes = {
    children: node.isRequired,
  };

  return (
    <SplitContainer>
      <div className="split-pane-top">{children[0]}</div>
      <Separator />
      <div className="split-pane-bottom">{children[1]}</div>
    </SplitContainer>
  );
};
