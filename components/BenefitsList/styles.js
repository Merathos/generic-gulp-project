import styled from 'styled-components';
import { TitleH3 } from 'elements';

export const Container = styled.section`
  margin-bottom: 90px;
  margin-right: 105px;
  margin-left: 120px;

  @media screen and (max-width: 1360px) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media screen and (max-width: 960px) {
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.banner ? '57%' : '42%')};

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const H3 = styled(TitleH3)`
  width: 80%;
  font-size: 32px;
  line-height: 170%;
  font-weight: 700;
  margin-bottom: 4px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 11px;
  }

  @media screen and (max-width: 767px) {
    font-size: 22px;
    line-height: 120%;
    box-sizing: border-box;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
  }
`;

export const Text = styled.p`
  width: 80%;
  font-size: 20px;
  line-height: 134%;
  margin-bottom: 50px;
  white-space: pre-wrap;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-bottom: 20px;
    white-space: normal;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 158%;
    box-sizing: border-box;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 18px;
  }
`;

export const Ref = styled.a`
  margin-bottom: 100px;
  color: #53b443;
  font-size: 18px;
  line-height: 120%;
  font-weight: 700;
  align-self: flex-start;
  transition: color 0.3s ease;

  &:hover {
    color: #339722;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    font-size: 14px;
    line-height: 160%;
  }
`;
