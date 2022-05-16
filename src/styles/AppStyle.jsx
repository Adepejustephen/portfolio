import styled from 'styled-components'

export const Circle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 500px;
  /* transform: translate(-50%, -50%); */
  clip-path: circle(50% at 80% 29%);

  background-color: #7ea1c4;
  /* background-color: #ffb357; */
  mix-blend-mode: exclusion;
  z-index: 1;
`;

export const AppTwo = styled.div`
  /* position: absolute; */
  height: 95vh;
  width: 95%;
  margin: auto;
  background-color: #022840;
  /* background: rgba(209, 218, 232, 0.1); */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 10px;
  z-index: 5;
  /* mix-blend-mode: exclusion; */
`;

// 084C61 midnigt green eagle
// DB3A34 parmanent garanun lake

// #FFB357