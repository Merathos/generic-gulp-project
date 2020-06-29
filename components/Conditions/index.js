import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH2 from '/elements/TitleH2';
import { IconsList } from 'components';

const H2 = styled(TitleH2)`
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

const Conditions = props => {
  const { data } = props;
  return (
    <section>
      <H2 content={data.title} />
      <IconsList data={data.list} />
    </section>
  );
};

Conditions.propTypes = {
  data: PropTypes.array.isRequired
};

export default Conditions;
