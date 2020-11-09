import styled from 'styled-components';
import Comment from 'components/Comment';

const Section = styled.section`
  max-width: 850px;
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

const Comments = props => {
  const { data } = props;
  return (
    <Section>
      {data.map((el, i) => (
        <Comment key={i} data={el} />
      ))}
    </Section>
  );
};

export default Comments;
