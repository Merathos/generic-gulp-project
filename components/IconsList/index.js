import styled from 'styled-components';
import { Icon, Subtitle } from 'elements';

const Section = styled.section``;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;

const EmojiContainer = styled.div`
  width: 57px;
  height: 57px;
  background-color: #f7f8f9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 420px) {
    width: 43px;
    height: 43px;
  }
  margin-bottom: 15px;
`;

const Emoji = styled.img`
  user-select: none;
  width: 20px;
  height: 20px;
`;

const IconsList = ({ data }) => {
  return (
    <Section>
      <List>
        {data.map((item) => (
          <li key={item.id}>
            <EmojiContainer>
              <Emoji
                src={item.image?.path?.normal}
                srcSet={`${item.image?.path?.retina} 2x`}
                alt={item.text}
                loading="lazy"
              />
            </EmojiContainer>
            <Subtitle>{item.text}</Subtitle>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default IconsList;
