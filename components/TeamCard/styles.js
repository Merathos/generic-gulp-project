import styled, { css } from 'styled-components';
import { TitleH3 } from 'elements';

export const Section = styled.div`
  max-width: ${props => (props.isMain ? '350px' : '380px')};
  transition: color 200ms ease;

  ${props =>
    props.isMain &&
    css`
      margin-bottom: 60px;

      @media screen and (max-width: 864px) {
        margin-bottom: 30px;
      }
    `}

  &:hover {
    color: #53b443;
    cursor: pointer;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: ${props => (props.isMain ? '40px' : '30px')};
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 45px;

  @media screen and (max-width: 420px) {
    margin-bottom: ${props => (props.isMain ? '20px' : '30px')};
    font-size: 14px;
    line-height: 152%;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  ${props =>
    props.isMain &&
    css`
      font-size: 24px;
      line-height: 120%;
    `}

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;

    ${props =>
      props.isMain &&
      css`
        font-size: 16px;
        margin-bottom: 6px;
      `}
  }
`;

export const ArrowRight = styled.a.attrs(props => ({
  image: props.hovered
    ? "url('icons/arrow-hover.png')"
    : "url('icons/arrow.png')",
}))`
  width: 38px;
  height: 38px;
  background-image: ${props => props.image};
  transition: background-image 200ms ease;
`;

export const Picture = styled.img`
  margin-bottom: ${props => (props.isMain ? '15px' : '30px')};

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;
