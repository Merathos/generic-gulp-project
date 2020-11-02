import styled from 'styled-components';

export const Description = styled.p`
  opacity: ${props => props.opacity || '1'};
  font-size: 20px;
  line-height: 158%;

  mark {
    background: rgba(47, 142, 217, 0.1);
  }

  a {
    color: #53B443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 158%;
  }
`;

export const Section = styled.section`
  margin-bottom: 22px;
  max-width: 854px;
  padding-top: ${props => (props.padding === 'h3' ? '30px' : '0')};

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;