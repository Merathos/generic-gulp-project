import styled from 'styled-components';
import { Icon, Subtitle } from 'elements';

const Section = styled.section``;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;

const Emoji = styled(Icon)`
  margin-bottom: 15px;
`;

const IconsList = props => {
  const { data } = props;
  return (
    <Section>
      <List>
        {data.map((el, i) => (
          <li key={i}>
            <Emoji name={el.icon} />
            <Subtitle>{el.text}</Subtitle>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default IconsList;
