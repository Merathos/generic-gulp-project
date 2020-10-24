import styled from 'styled-components';

const Button = styled.button`
  opacity: 0.5;
  font-size: 16px;
  line-height: 131%;
  position: relative;
  align-self: flex-start;
  padding-right: 16px;

  &::after {
    content: '';
    background-image: url('icons/close-filter.svg');
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0%;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 190%;
  }
`;

const FilterButton = ({ name, onClick }) => (
  <Button type="button" onClick={() => onClick()}>
    {name}
  </Button>
);

export default FilterButton;
