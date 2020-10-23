import styled from 'styled-components';

const Styled = styled.button`
display: block;
margin-left: auto;
margin-right: 37px;
margin-bottom: 75px;

@media (max-width: 768px) {
  margin-right: 22px;
  margin-bottom: 0;

  img {
    width: 27px;
    height: 27px;
  }
}
`;

const CloseBtn = ({ className, onClick }) => (
  <Styled type="button" 
    className={className}
    aria-label="Закрыть" 
    onClick={onClick}
  >
    <img src="icons/cross-btn.svg" />
  </Styled>
);

export default CloseBtn;