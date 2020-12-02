import * as S from './styles';

const Recruiters = ({ data, back }) => {
  const { text, title } = data;
  return (
    <S.Section>
      <S.H2>{title}</S.H2>
      <S.Text>{text}</S.Text>
      <S.List>
        {back.map((el, i) => (
          <S.Element key={i}>
            <S.Clip>
              <S.Picture
                src={el.image.path.normal}
                alt={el.name}
                width="200"
                height="100"
              />
            </S.Clip>
            <S.H3>{el.name}</S.H3>
            <S.Subtitle>{el.email}</S.Subtitle>
            <S.Subtitle>{el.telegram}</S.Subtitle>
          </S.Element>
        ))}
      </S.List>
    </S.Section>
  );
};

export default Recruiters;
