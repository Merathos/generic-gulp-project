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
  Wrapper
} from './styles';

const List = props => {
  const { data, type } = props;
  return (
    <Section>
      {type === 'blue' ? (
        <BlueList>
          {data.map((el, i) => (
            <li key={i}>
              <BlueTitle>{el.title}</BlueTitle>
              <BlueText>{el.text}</BlueText>
            </li>
          ))}
        </BlueList>
      ) : (
        <NormalList>
          {data.map((el, i) => (
            <Element key={i}>
              {el.src && (
                <Wrapper>
                  <img src={el.src} alt={el.title} />
                </Wrapper>
              )}
              <H3>{el.title}</H3>
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
