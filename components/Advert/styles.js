import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Section = styled.div`
  max-width: 380px;
  transition: color 200ms ease;

  &:hover {
    color: #53B443;
    cursor: pointer;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

export const StyledText = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 45px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 152%;
  }
`;

export const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 420px) {
    margin-bottom: 14px;
  }
`;

export const ArrowRight = styled.a.attrs(props => ({
  image: props.hovered
    ? "url('/icons/arrow-hover.png')"
    : "url('/icons/arrow.png')"
}))`
  width: 38px;
  height: 38px;
  background-image: ${props => props.image};
  transition: background-image 200ms ease;
`;