import styled from 'styled-components';
import PropTypes from 'prop-types';
import Subtitle from 'elements/Subtitle';

const Section = styled.section`
  margin-bottom: 110px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  } 
`;

const Emoji = styled.div`
  width: 57px;
  height: 57px;
  background: linear-gradient(0deg, #F7F8F9, #F7F8F9), #201F2A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const IconsList = props => {
  const { data } = props;
  return (
    <Section>
      <List>
        {data.map((el, i) => (
          <li>
            <Emoji key={i}>
              <span className={`ec ${el.icon}`} />
            </Emoji>
            <Subtitle content={el.text} />
          </li>
        ))}
      </List>
    </Section>
  );
};

IconsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default IconsList;
