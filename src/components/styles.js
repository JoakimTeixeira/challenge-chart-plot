import styled from 'styled-components';

export const SplitContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .split-pane-top,
  .split-pane-bottom {
    flex: 1;
    overflow: hidden;
  }
`;

export const Separator = styled.div`
  border: 1px solid black;
  cursor: row-resize;
`;
