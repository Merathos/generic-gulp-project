import styled from 'styled-components';
import PropTypes from 'prop-types';
import Subtitle from 'elements/Subtitle';
import Icon from 'elements/Icon';

const Section = styled.section`
  margin-bottom: 100px;

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
