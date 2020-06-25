import styled from 'styled-components';

const Styled = styled.div`
  width: 57px;
  height: 57px;
  background: linear-gradient(0deg, #F7F8F9, #F7F8F9), #201F2A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = ({ name, className }) => (
  <Styled className={className}>
    <span className={`ec ${name}`} />
  </Styled>
);

export default Icon;