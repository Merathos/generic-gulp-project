import * as S from './styles';

const RelocationHeader = (props) => {
  const {
    data: { title, text, list, picture },
  } = props;

  return (
    <S.GreyHeader>
      <S.Grid>
        <S.Title>{title}</S.Title>
        <S.PicContainer>
          <img src={picture} alt={title} width="344" height="489" />
        </S.PicContainer>
        <S.Content>
          <S.Text>{text}</S.Text>
          <S.Features>
            {list.map((el, i) => (
              <S.Item key={i}>
                <S.Icon>
                  <img src={el.icon} alt="Бонус" width="24" height="24" />
                </S.Icon>
                <S.Text>{el.text}</S.Text>
              </S.Item>
            ))}
          </S.Features>
        </S.Content>
      </S.Grid>
    </S.GreyHeader>
  );
};

export default RelocationHeader;
