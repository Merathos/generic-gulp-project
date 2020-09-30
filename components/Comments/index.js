import styled from 'styled-components';
import Comment from 'components/Comment';

const Section = styled.section`
  margin-bottom: 100px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

const Comments = props => {
  const { data } = props;
  return (
    <Section>
      <Comment position="flex-start" data={data[0]} />
      <Comment position="flex-end" data={data[1]} />
    </Section>
  );
};

export default Comments;
