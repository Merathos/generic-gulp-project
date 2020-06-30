import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleH3 from 'elements/TitleH3';
import Text from 'elements/Text';

const Section = styled.section`
  margin-bottom: 110px;

  @media screen and (max-width: 420px) {
    margin-bottom: 50px;
  }
`;

const Img = styled.img`
  margin-bottom: 40px;

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

const NormalList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const BlueList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;

const BlueTitle = styled(TitleH3)`
  color: #2F8ED9;
  margin-bottom: 13px;
`; 

const BlueText = styled(Text)`
  opacity: 0.5;
`; 

const H3 = styled(TitleH3)`
  margin-bottom: 30px;
`; 

const Element = styled.li`
  width: 384px;
  margin-right: 60px;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin-right: 0;
  }
`;

const List = props => {
  const { data, type } = props;
  return (
    <Section>
      {type === 'blue' ? (
        <BlueList>
          {data.map((el, i) => (
            <li key={i}>
              <BlueTitle content={el.title} />
              <BlueText content={el.text} />
            </li>
          ))}
        </BlueList>
      ) : (
        <NormalList>
          {data.map((el, i) => (
            <Element key={i}>
              {el.src && <Img src={el.src} alt={el.title} />}
              <H3 content={el.title} />
              <Text content={el.text} />
            </Element>
          ))}
        </NormalList>
      )}
    </Section>
  );
};

List.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string
};

List.defaultProps = {
  type: 'normal'
};

export default List;
