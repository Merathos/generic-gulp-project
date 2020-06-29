import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH2 from '/elements/TitleH2';

const Section = styled.section`
  margin-bottom: 160px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  } */
`;

const Map = props => {
  const { data } = props;
  return (
    <Section>
      <TitleH2 content={data.title} />
      <div>
        Map will be here
      </div>
    </Section>
  );
};

Map.propTypes = {
  data: PropTypes.array.isRequired
};

export default Map;
