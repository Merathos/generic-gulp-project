import PropTypes from 'prop-types';
import {
  Section,
  NormalList,
  BlueList,
  BlueText,
  NormalText,
  H3,
  BlueTitle,
  Element,
  Img
} from './styles';

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
              <NormalText>{el.text}</NormalText>
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
