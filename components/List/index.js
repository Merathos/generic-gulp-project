import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paragraph } from 'components';

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
  flex-direction: ${(props) => props.position || 'row'};
  justify-content: space-between;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

const BlueList = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.position || 'row'};
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 420px) {
    flex-wrap: wrap;
  }
`;

const Element = styled.li`
  width: 384px;
  margin-right: 60px;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin-right: 0;
  }
`;

const BlueElement = styled.li`
  @media screen and (max-width: 420px) {
    width: 50%;
    margin-bottom: 30px;
  }
`;

const List = props => {
  const { data, type } = props;
  return (
    <Section>
      {type === 'blue' ? (
        <BlueList>
          {data.map((el, i) => (
            <BlueElement key={i}>
              <Paragraph size="h3" data={el} color="#2F8ED9" opacity="0.5" />
            </BlueElement>
          ))}
        </BlueList>
      ) : (
        <NormalList>
          {data.map((el, i) => (
            <Element key={i}>
              {el.src && <Img src={el.src} alt={el.title} />}
              <Paragraph size="h3" data={el} />
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
