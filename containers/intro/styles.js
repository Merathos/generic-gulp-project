import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #f7f8f9;
  color: #000000;
  padding-top: 110px;
  padding-left: 120px;
  min-height: 895px;

  @media screen and (max-width: 1024px) {
    padding-top: 64px;
    padding-left: 60px;
    min-height: 811px;
  }

  @media screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 30px;
  }

  @media screen and (max-width: 420px) {
    padding-left: 0;
  }
`;

export const TextBlock = styled.div`
  width: 65%;
  padding-top: 54px;
  margin-right: -15%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 30px;
    margin-right: 0;
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

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 32px;
    line-height: 134%;
  }
`;

export const Text = styled.p`
  width: 90%;
  margin-bottom: 60px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    line-height: 158%;
    margin-bottom: 30px;
  }
`;

export const ListBlock = styled.div`
  padding-bottom: 85px;
  text-transform: lowercase;

  @media screen and (max-width: 1024px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 640px) {
    padding-bottom: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
      max-height: 100px;
      flex-direction: column;
    }

    @media screen and (max-width: 480px) {
      max-height: none;
    }
  }

  li {
    min-width: 165px;

    @media screen and (max-width: 1024px) {
      margin-bottom: 10px;
      min-width: 150px;
    }
  }
`;

export const PortraitBlock = styled.div`
  width: 60%;
  align-self: flex-end;
  position: relative;

  @media screen and (max-width: 720px) {
    align-self: center;
    width: 80%;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    width: 480px;
    height: 480px;
    left: 405px;
    top: 200px;
    transform: rotate(30deg);
    background-color: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    &::before {
      width: 300px;
      height: 300px;
      left: 200px;
      top: 71px;
    }
  }

  @media screen and (max-width: 420px) {
    &::before {
      width: 200px;
      height: 200px;
    }
  }
`;
