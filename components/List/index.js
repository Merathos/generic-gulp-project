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
              <BlueTitle dangerouslySetInnerHTML={{ __html: el.title }} />
              <BlueText dangerouslySetInnerHTML={{ __html: el.describe }} />
            </li>
          ))}
        </BlueList>
      ) : (
        <NormalList>
          {data.map((el, i) => (
            <Element key={i}>
              {el.imageUrl && (
                <Wrapper>
                  <img src={`https://api.develop.dins.d.nimax.ru/${el.imageUrl}`} alt={el.title} />
                </Wrapper>
              )}
              <H3 dangerouslySetInnerHTML={{ __html: el.title }} />
              <NormalText dangerouslySetInnerHTML={{ __html: el.describe }} />
            </Element>
          ))}
        </NormalList>
      )}
    </Section>
  );
};

export default List;
