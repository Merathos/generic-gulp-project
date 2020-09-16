import { SidebarArticle, Slider } from 'components';
import * as S from './styles';

const InternAbout = ({ data }) => {
  const { title, text, sidebar } = data;
  return (
    <>
    <S.Container>
      <div>
        <S.Title>{title}</S.Title>
        <S.StyledText>{text}</S.StyledText>
      </div>
      <SidebarArticle type="icon" data={sidebar} />
    </S.Container>
    </>
  );
};

export default InternAbout;
