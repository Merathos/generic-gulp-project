import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleH2 = styled.h2`
  font-weight: 800;
  font-size: 54px;
  line-height: 130%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const TitleH3 = styled.h3`
  margin-bottom: 40px;
`;

const StyledList = styled.ul`
  flex-direction: $(props => props.position || "row");
`;

const List = props => {
  const { data, position } = props;
  return (
    <section className="main__special-offer special-offer">
      <StyledList position={position}>
        {data.map(el => <li>
          {el.image && <img src={el.image} alt={el.title} />}
          <h4>{el.title}</h4>
          <p>{el.description}</p>
          </li>)}
      </StyledList>
    </section>
  );
};

List.propTypes = {
  data: PropTypes.objectOf({
    title: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  position: PropTypes.string
};

List.defaultProps = {
  position: 'row'
};

export default List;
