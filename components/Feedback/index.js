import styled from 'styled-components';
import TitleH3 from 'elements/TitleH3';
import Subtitle from 'elements/Subtitle';
import { sanitize } from 'isomorphic-dompurify';

const Img = styled.img`
  width: 404px;

  @media screen and (max-width: 1024px) {
    width: 200px;
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  margin-left: 70px;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

const StyledText = styled.p`
  font-size: 18px;
  line-height: 158%;

  a {
    display: inline;
    color: #53b443;
    transition: color 0.3s;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const Section = styled.section`
  max-width: 850px;
  display: flex;
  margin-bottom: 120px;
  align-items: flex-end;
  padding-top: 90px;

  picture {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 179px;
      height: 179px;
      border-radius: 50%;
      right: -89px;
      top: -89px;
      background-color: #f7f8f9;
      z-index: -3;
      display: block;

      @media screen and (max-width: 768px) {
        width: 112px;
        height: 112px;
        right: -56px;
        top: -56px;
      }
    }
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 60px;
  }
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 10px;

  a {
    display: inline;
    color: #53b443;
    transition: color 0.3s;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 7px;
  }
`;

const H3 = styled(TitleH3)`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }
`;

const Feedback = (props) => {
  const {
    data: { imageUrl, title, describe, subtitle },
  } = props;
  return (
    <Section>
      <picture>
        <source
          srcSet={`${process.env.NEXT_PUBLIC_API_STORAGE}${imageUrl}`}
          type="image/png"
          media="(min-width: 420px)"
        />
        <Img
          src={`${process.env.NEXT_PUBLIC_API_STORAGE}${imageUrl}`}
          alt={title}
        />
      </picture>
      <Content>
        <StyledSubtitle
          dangerouslySetInnerHTML={{ __html: sanitize(subtitle) }}
        />
        <H3 dangerouslySetInnerHTML={{ __html: sanitize(title) }} />
        <StyledText dangerouslySetInnerHTML={{ __html: sanitize(describe) }} />
      </Content>
    </Section>
  );
};

export default Feedback;
