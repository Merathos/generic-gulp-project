import { sanitize } from 'isomorphic-dompurify';
import * as S from './styles';

const MarkerList = (props) => {
  const { data, type, inline = false, className } = props;
  return (
    <>
      {type === 'ellipse' ? (
        <S.List inline={inline}>
          {data.map((el, i) => (
            <S.ElementEllipse inline={inline} key={i}>
              {el.image && <S.Img src={el.image} alt={el.title} />}
              <S.Text
                inline={inline}
                dangerouslySetInnerHTML={{
                  __html: sanitize(el.text) || sanitize(el),
                }}
              />
            </S.ElementEllipse>
          ))}
        </S.List>
      ) : (
        <S.List className={className}>
          {data.map((el, i) => (
            <S.ElementNumber key={i}>
              <S.Number>{`0${i + 1}`}</S.Number>
              {el.image && <img src={el.image} alt={el.title} />}
              <S.Text
                dangerouslySetInnerHTML={{
                  __html: sanitize(el.text) || sanitize(el),
                }}
              />
            </S.ElementNumber>
          ))}
        </S.List>
      )}
    </>
  );
};

export default MarkerList;
