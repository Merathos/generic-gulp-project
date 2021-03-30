import Comment from 'components/Comment';
import * as S from './styles';

const Comments = (props) => {
  const { data } = props;
  return (
    <S.Section>
      {data.map((el, i) => (
        <Comment key={i} data={el} />
      ))}
    </S.Section>
  );
};

export default Comments;
