import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH2 from '/elements/TitleH2';
import { List } from 'components';

const Section = styled.section`
  /* display: flex;
  justify-content: space-between; */

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Requirements = props => {
  const { data } = props;
  return (
    <Section>
      <TitleH2 content={data.title} />
      <List type="ellipse" position="column" data={data.list} />
    </Section>
  );
};

Requirements.propTypes = {
  data: PropTypes.shape.isRequired
};

export default Requirements;
