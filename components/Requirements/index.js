import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH2 from '/elements/TitleH2';
import { MarkerList } from 'components';

const Section = styled.section`
  /* display: flex;
  justify-content: space-between; */

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const H2 = styled(TitleH2)`
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const Requirements = props => {
  const { data, type } = props;
  return (
    <Section>
      <H2 content={data.title} />
      <MarkerList type={type} data={data.list} />
    </Section>
  );
};

Requirements.propTypes = {
  data: PropTypes.shape.isRequired
};

export default Requirements;
