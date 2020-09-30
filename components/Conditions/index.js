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

const Section = styled.div`
  margin-bottom: 100px;
  position: relative;

  &::after {
    content: '';
    width: 365px;
    height: 385px;
    position: absolute;
    top: -5%;
    right: -115%;
    z-index: 2;
    background-image: url('backgrounds/vacancy-middle.png');
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;

    &::after {
      display: none;
    }
  }
`;

const Conditions = props => {
  const { data } = props;
  return (
    <Section>
      <H2>{data.title}</H2>
      <IconsList data={data.list} />
    </Section>
  );
};

Conditions.propTypes = {
  data: PropTypes.array.isRequired
};

export default Conditions;
