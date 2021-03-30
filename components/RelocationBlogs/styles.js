import styled from 'styled-components';
import { TitleH2 } from 'elements';

export const Section = styled.section`
  margin-bottom: 160px;
  background: url('/backgrounds/relocation-difficulties.png') no-repeat right
    170px;

  @media screen and (max-width: 1360px) {
    background: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 80px;
  }
`;

export const Title = styled(TitleH2)`
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    margin-bottom: 22px;
  }
`;

export const Text = styled.p`
  margin-bottom: 80px;
  font-size: 20px;
  line-height: 32px;
  max-width: 740px;

  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
    font-size: 14px;
    line-height: 22px;
  }
`;

export const List = styled.ul`
  margin-bottom: 57px;
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 767px) {
    margin-bottom: 39px;
  }

  li {
    margin-right: 40px;
    margin-bottom: 40px;
    width: 100%;
    max-width: 349px;

    @media screen and (max-width: 685px) {
      margin-right: 0;
    }

    @media screen and (max-width: 767px) {
      max-width: 315px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const NoteWrapper = styled.div`
  max-width: 855px;
  padding: 40px 0 40px 2px;
  border-top: 2px solid rgba(31, 32, 42, 0.1);
  border-bottom: 2px solid rgba(31, 32, 42, 0.1);
  display: grid;
  grid-template-columns: 57px 1fr;
  grid-column-gap: 30px;

  @media screen and (max-width: 767px) {
    padding: 24px 0 21px 0;
    grid-template-columns: 1fr;
    grid-template-rows: 43px 1fr;
    grid-row-gap: 12px;
  }
`;

export const Icon = styled.div`
  margin-bottom: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 57px;
  height: 57px;
  border-radius: 50%;
  background-color: #f7f8f9;

  @media screen and (max-width: 767px) {
    margin-bottom: 18px;
    width: 43px;
    height: 43px;
  }

  img {
    width: 20px;
    height: auto;

    @media screen and (max-width: 767px) {
      width: 18px;
    }
  }
`;

export const NoteText = styled.p`
  font-size: 20px;
  line-height: 158%;
  font-weight: bold;

  a {
    display: inline-block;
    font-weight: 700;
    color: #53b443;
    transition: color 0.3s ease;

    &:hover,
    &:active {
      color: #339722;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 150%;
  }
`;
