import styled from 'styled-components';
import { TitleH2, Button } from 'elements';

export const Container = styled.div`
  position: relative;
  top: 203px;
  background-color: #ffffff;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 37px;
  padding-bottom: 182px;
  background-image: url('backgrounds/confirmation-left.svg'), 
                    url('backgrounds/confirmation-right.svg');
  background-position: left 0, right 100%;
  background-repeat: no-repeat, no-repeat;

  @media (max-width: 900px) {
    top: 0;
    min-height: 655px;
  }
  
  @media (max-width: 768px) {
    padding-top: 22px;
    padding-bottom: 70px;
    background-size: 40% 50%;
    background-position: left -10%, right -30px  top 95%;
  }
`;

export const Title = styled(TitleH2)`
  margin: 0 auto;
  margin-bottom: 13px;
  width: max-content;

  @media (max-width: 768px) {
    margin-top: 143px;
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 42.88px;
    letter-spacing: 0.01em;
  }
`;

export const Text = styled.p`
  margin: 0 auto;
  margin-bottom: 60px;
  max-width: 470px;
  font-size: 18px;
  line-height: 26.64px;
  opacity: 0.5;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    max-width: 315px;
    font-size: 14px;
    line-height: 22.12px;
  }
`;

export const Btn = styled.button`
  margin: 0 auto;
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  background: #fb5235;
  border-radius: 8px;
  padding: 0 32px;
  color: #ffffff;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 56px;
    font-size: 12px;
    line-height: 14.4px;
  }

  &:hover {
    color: #53B443;
  }
`;