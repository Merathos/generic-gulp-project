import * as S from './styles';

const Tabs = ({ tabs, handleClick }) => (
  <S.List>
    {tabs.map((el, i) => (
      <S.Item key={i}>
        <input
          type="radio"
          name="filter-tabs"
          id={el}
          onChange={() => handleClick(el)}
        />
        <S.Label htmlFor={el}>{el}</S.Label>
      </S.Item>
    ))}
  </S.List>
);

export default Tabs;
