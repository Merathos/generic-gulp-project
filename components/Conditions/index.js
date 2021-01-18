import styled from 'styled-components';
import TitleH2 from 'elements/TitleH2';
import { IconsList } from 'components';
import { useSelector } from 'react-redux';

const H2 = styled(TitleH2)`
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 60px;
  }
`;

const Section = styled.div`
  position: relative;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;

    &::after {
      display: none;
    }
  }
`;

const Conditions = props => {
  const language = useSelector(state => state.language);

  const { data } = props;
  return (
    <Section>
      <H2>{language ? data.titleEn : data.title}</H2>
      <IconsList data={data.list} />
    </Section>
  );
};

export default Conditions;
