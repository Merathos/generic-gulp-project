import styled, { css } from 'styled-components';
import { Text, Icon, Button, SmallText } from 'elements';

export const StyledSmallText = styled(SmallText)`
  max-width: 280px;
  white-space: pre-wrap;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 240px;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    padding-top: 110px;
    padding-bottom: 110px;
  }

  ${(props) =>
    props.isContacts &&
    css`
      padding-top: 210px;

      @media screen and (max-width: 768px) {
        padding-top: 113px;
        padding-bottom: 80px;
      }
    `};
`;

export const Wrapper = styled.article`
  max-width: ${(props) => (props.withPicture ? '744px' : '854px')};
  padding-right: ${(props) => (props.withPicture ? '110px' : '0')};

  @media screen and (max-width: 1250px) {
    padding-right: ${(props) => (props.withPicture ? '60px' : '0')};
  }

  @media screen and (max-width: 1024px) {
    padding-right: 0;
  }

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

export const Aside = styled.aside`
  width: 254px;
  margin-top: 152px;
  margin-left: auto;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin-top: 80px;
    margin-left: 0;
  }
`;

export const Paragraph = styled(Text)`
  margin-bottom: 140px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  ${(props) =>
    props.isContacts &&
    css`
      margin-top: 52px;
      margin-bottom: 164px;
      font-size: 24px;
      line-height: 36px;
      max-width: 750px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 25px;
        margin-top: 22px;
      }
    `};
`;

export const Features = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 100px;
  margin-bottom: 100px;

  @media screen and (max-width: 1200px) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;
  }

  ${(props) =>
    props.twoColumns &&
    css`
      @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-gap: 30px;
        margin-bottom: 30px;
      }

      @media screen and (max-width: 420px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 30px;
        margin-bottom: 0;
      }
    `};
`;

export const ListTitle = styled.b`
  display: block;
  color: #2f8ed9;
  margin-bottom: 12px;
  white-space: nowrap;
  transition: color 0.3s ease;
  font-size: 34px;
  line-height: 120%;
  font-weight: 700;

  &:hover,
  &:active {
    color: #2079bf;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 120%;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 7px;
  }
`;

export const Element = styled.li`
  @media screen and (max-width: 1024px) {
    display: flex;
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }

  ${(props) =>
    props.isContacts &&
    css`
      @media screen and (max-width: 420px) {
        flex-direction: unset;
      }
    `};
`;

export const StyledIcon = styled(Icon)`
  margin-bottom: 30px;
  background-size: 24px 24px;

  @media screen and (max-width: 1024px) {
    flex-shrink: 0;
    margin-right: 20px;
    margin-bottom: 0;
  }

  ${(props) =>
    props.isContacts &&
    css`
      transform: scale(0.93);
    `}
`;

export const StyledButton = styled(Button)`
  margin-right: 40px;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Picture = styled.img`
  @media screen and (max-width: 1250px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 600px) {
    max-width: 315px;
    max-height: 319px;
    object-fit: cover;
  }
`;

export const Block = styled.div`
  position: relative;
  width: 340px;

  &::after {
    content: '';
    position: absolute;
    background-image: url('/backgrounds/our-people.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 330px;
    height: 330px;
    bottom: 40px;
    right: -200px;
    z-index: 2;
    animation: 45s linear infinite rotation;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    &::after {
      width: 120px;
      height: 120px;
      background-size: 120px 120px;
      bottom: 20px;
      right: 0;
    }
  }

  ${(props) =>
    props.afterTitle === true &&
    css`
      display: none;

      @media screen and (max-width: 600px) {
        display: block;
        box-sizing: border-box;
        max-width: 315px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 40px;
      }
    `}

  ${(props) =>
    props.afterTitle === false &&
    css`
      @media screen and (max-width: 600px) {
        display: none;
      }
    `}

  ${(props) =>
    props.hash &&
    css`
    align-self: flex-start;
    min-width: 340px;

    @media screen and (max-width: 1250px) {
      min-width: 260px;
    }

    @media screen and (max-width: 1024px) {
      min-width: auto;
    }

    @media screen and (max-width: 600px) {
      width: 315px;
      align-self: center;
    }

    @media screen and (max-width: 420px) {
      width: auto;
    }

    &::after {
      background-repeat: no-repeat;
      bottom: -130px;
      left: -156px;
      right: auto;

      @media screen and (max-width: 1250px) {
        left: auto;
        right: -120px;
        bottom: -110px;
        width: 240px;
        height: 240px;
        background-size: 240px 240px;
      }

      @media screen and (max-width: 600px) {
        width: 120px;
        height: 120px;
        background-size: 120px 120px;
        bottom: -40px;
        right: -30px;
      }
  `}

  ${(props) =>
    props.hash === 'relocation' &&
    css`
      background-image: url('/backgrounds/relocate-letters.svg');
    `}

  ${(props) =>
    props.hash === 'internship' &&
    css`
      background-image: url('/backgrounds/letters-intern.svg');
      width: 294px;
      height: 294px;
    `}
`;
