import { SidebarArticle } from 'components';
import * as S from './styles';

const InternInfo = ({ data }) => {
  const { title, text, list, sidebar } = data;
  return (
    <S.Container>
      <div>
        <S.Title>{title}</S.Title>
        <S.StyledText>{text}</S.StyledText>
        <S.List>
          {list.map((el, i) => (
            <S.Item key={i}>{el}</S.Item>
          ))}
        </S.List>
      </div>
      <SidebarArticle type="image" data={sidebar} isInternship />
    </S.Container>
  );
};

export default InternInfo;
