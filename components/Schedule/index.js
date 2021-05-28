import { SmartText } from 'elements';
import { ArticleContent } from 'components';
import * as S from './styles';

const Schedule = ({
  content,
  programsTitle,
  programs,
  regForm,
  recap,
  isActive,
}) => {
  let parsedContent = {};
  if (content) {
    parsedContent = JSON.parse(content);
  }

  return (
    <S.Section>
      <S.StyledContainer>
        <ArticleContent content={parsedContent} recap={recap} />
        {isActive && programs?.length > 0 && (
          <>
            <S.MainTitle>{programsTitle}</S.MainTitle>
            <S.List>
              {programs.map((el, i) => (
                <S.Item key={i}>
                  <S.Time>{el.time_at}</S.Time>
                  <S.Content>
                    <S.Title>{el.name}</S.Title>
                    {el.description && <SmartText text={el.description} />}
                  </S.Content>
                </S.Item>
              ))}
            </S.List>
          </>
        )}
        {isActive && (
          <S.StyledButton
            accent
            onClick={() => {
              regForm.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Зарегистрироваться
          </S.StyledButton>
        )}
      </S.StyledContainer>
    </S.Section>
  );
};

export default Schedule;
