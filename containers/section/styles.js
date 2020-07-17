import styled from 'styled-components';

export const Wrapper = styled.section.attrs(props => ({
  marginDesktop: props.vacancy && '160px',
  marginMobile: props.vacancy && '80px',
  marginDesktop: props.article && '100px',
  marginMobile: props.article && '50px',
}))`
  margin-bottom: ${props => props.marginDesktop || '160px' };

  @media screen and (max-width: 420px) {
    margin-bottom: ${props => props.marginMobile || '80px' };
  }
`;