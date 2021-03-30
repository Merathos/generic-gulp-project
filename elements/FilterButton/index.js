import * as S from './styles';

const FilterButton = ({ name, onClick }) => (
  <S.Button type="button" onClick={onClick}>
    {name}
  </S.Button>
);

export default FilterButton;
