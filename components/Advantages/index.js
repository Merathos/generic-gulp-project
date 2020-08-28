import { Card } from 'elements';
import * as S from './styles';

const Advanteges = ({ data }) => {
  const { title, list } = data;
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.List>
        {list.map((el, i) => (
          <li key={i}>
            <Card data={el} />
          </li>
        ))}
      </S.List>
    </>
  );
};

export default Advanteges;
