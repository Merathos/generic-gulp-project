import styled from 'styled-components';

export const Status = styled.p`
  margin-top: -20px;
  margin-bottom: 57px;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => (props.status === 'streaming' ? `#FB5235` : ``)};

  @media screen and (max-width: 910px) {
    margin-top: -42px;
    margin-left: auto;
    margin-bottom: 60px;
    width: fit-content;
    font-size: 14px;
    line-height: 21px;
  }

  @media screen and (max-width: 767px) {
    max-width: 135px;
  }
`;

export const Icon = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;

  @media screen and (max-width: 910px) {
    margin-right: 6px;
  }
`;
