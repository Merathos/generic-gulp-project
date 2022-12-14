import styled from 'styled-components';
import { Btn } from 'elements';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #f7f8f9;
  color: #000000;
  padding-top: 164px;
  padding-left: 120px;
  /* min-height: 895px; */

  @media screen and (max-width: 1360px) {
    padding-left: 60px;
    min-height: 811px;
  }

  @media screen and (max-width: 960px) {
    padding-left: 40px;
    flex-direction: column;
    justify-content: flex-start;
    min-height: auto;
  }

  @media screen and (max-width: 767px) {
    padding-top: 110px;
    padding-left: 30px;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
  }
`;

export const TextBlock = styled.div`
  width: 65%;
  margin-right: -15%;
  z-index: 2;

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    box-sizing: border-box;
    padding-right: 30px;
    margin-right: 0;
  }

  @media screen and (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Title = styled.h1`
  width: 65%;
  margin-bottom: 20px;
  font-size: 90px;
  line-height: 100px;
  font-weight: 800;
  text-transform: uppercase;
  color: #201f2b;

  @media screen and (max-width: 960px) {
    width: 70%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 32px;
    line-height: 134%;
  }

  @media screen and (max-width: 767px) {
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Text = styled.p`
  width: 90%;
  margin-bottom: 60px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 16px;
    line-height: 158%;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    width: auto;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const ListBlock = styled.div`
  padding-bottom: 85px;
  text-transform: lowercase;

  @media (-webkit-min-device-pixel-ratio: 1.5) {
    padding-bottom: 50px;
  }

  @media screen and (max-width: 960px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 640px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    width: auto;
    padding-left: 30px;
    padding-right: 8px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 960px) {
      max-width: 84%;
    }

    @media screen and (max-width: 767px) {
      max-width: 100%;
    }

    @media screen and (max-width: 640px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 767px) {
      justify-content: space-between;
    }

    @media screen and (max-width: 360px) {
      flex-direction: column;
    }
  }

  li {
    min-width: 165px;

    @media screen and (max-width: 960px) {
      width: 42%;
      margin-right: 10px;
      margin-bottom: 10px;
      min-width: 130px;
    }

    @media screen and (max-width: 767px) {
      width: 46%;
      box-sizing: border-box;

      &:nth-child(even) {
        margin-right: 0;
      }
    }

    @media screen and (max-width: 360px) {
      width: 100%;
    }
  }
`;

export const Button = styled(Btn)`
  max-width: 300px;
  background-color: #ec4d32;
  border-color: #ec4d32;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 223px;

  @media (-webkit-min-device-pixel-ratio: 1.5) {
    margin-bottom: 85px;
  }

  &:hover {
    border-color: #ec381a;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const PortraitBlock = styled.div`
  width: 60%;
  align-self: flex-end;
  position: relative;

  @media screen and (max-width: 960px) {
    align-self: center;
    width: 80%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }

  /* &::before {
    content: '';
    position: absolute;
    width: 480px;
    height: 480px;
    left: 400px;
    top: 250px;
    transform: rotate(30deg);
    background-color: #ffffff;
  } */

  @media screen and (max-width: 960px) {
    &::before {
      width: 300px;
      height: 300px;
      left: 200px;
      top: 71px;
    }
  }

  @media screen and (max-width: 767px) {
    &::before {
      width: 200px;
      height: 200px;
    }
  }
`;
