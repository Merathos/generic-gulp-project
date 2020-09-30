import * as S from './styles';

const MarkerList = props => {
  const { data, type } = props;
  return (
    <>
      {type === 'ellipse' ? (
        <ul>
          {data.map((el, i) => (
            <S.ElementEllipse key={i}>
              {el.image && <S.Img src={el.image} alt={el.title} />}
              <S.Text>{el.text || el}</S.Text>
            </S.ElementEllipse>
          ))}
        </ul>
      ) : (
        <ul>
          {data.map((el, i) => (
            <S.ElementNumber key={i}>
              <S.Number>{`0${i + 1}`}</S.Number>
              {el.image && <img src={el.image} alt={el.title} />}
              <S.Text>{el.text || el}</S.Text>
            </S.ElementNumber>
          ))}
        </ul>
      )}
    </>
  );
};

export default MarkerList;
