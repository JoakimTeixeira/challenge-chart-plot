import React, { useContext, useEffect, useRef } from 'react';
import { node } from 'prop-types';
import { SplitPaneContext } from 'contexts/SplitPaneContext';
import { SplitContainer, Separator } from './styles';

export const SplitPane = ({ children }) => {
  SplitPane.propTypes = {
    children: node.isRequired,
  };

  const separatorYPosition = useRef(null);
  const { topHeight, handleTopHeight, topRef } = useContext(SplitPaneContext);

  const onMouseDown = (event) => {
    separatorYPosition.current = event.clientY;
  };

  const onMouseUp = () => {
    separatorYPosition.current = null;
  };

  const onMouseMove = (event) => {
    if (separatorYPosition.current) {
      const newTopHeight = topHeight + event.clientY - separatorYPosition.current;
      separatorYPosition.current = event.clientY;

      if (newTopHeight <= window.innerHeight / 2) {
        handleTopHeight(newTopHeight);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });

  useEffect(() => {
    if (!topHeight) {
      handleTopHeight(topRef.current.clientHeight);
      topRef.current.style.flex = 'none';
    }

    topRef.current.style.height = `${topHeight}px`;
  }, [topHeight]);

  return (
    <SplitContainer>
      <div className="split-pane-top" ref={topRef}>
        {children[0]}
      </div>
      <Separator role="separator" onMouseDown={onMouseDown} />
      <div className="split-pane-bottom">{children[1]}</div>
    </SplitContainer>
  );
};
