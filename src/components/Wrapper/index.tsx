import styled from 'styled-components';

const Wrapper = styled.div`
  /* height: 100%; */
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.background};
`;

export default Wrapper;
