import { TitleH1 } from 'elements';
import * as S from './styles';

const TeamsHeader = ({ title, text, stack, picture }) => {
  return (
    <S.Grid>
      <S.Wrapper>
        <TitleH1>{title}</TitleH1>
        <S.Paragraph>{text}</S.Paragraph>
        <S.TextBlock>
          <S.Bold>Technology Stack:</S.Bold>
          <S.StyledText>{stack}</S.StyledText>
        </S.TextBlock>
      </S.Wrapper>
      {picture && <S.Picture src={picture.path.normal} alt={title} />}
    </S.Grid>
  );
};

export default TeamsHeader;
