import styled from 'styled-components';

export const Contained = styled.div`
  max-width: 124rem;
  z-index: 2;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
`;

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: ${({ fullHeight }) => (fullHeight ? '100vh' : '100%')};
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 6rem 0rem;
  margin-top: 7rem;
  color: var(--text);
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 6rem;
  }
`;