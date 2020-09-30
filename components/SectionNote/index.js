import styled from 'styled-components';
import Icon from 'elements/Icon';

const Text = styled.p`
  font-size: 20px;
  line-height: 158%;
  font-weight: bold;

  @media screen and (max-width: 420px) {
    font-size: 14px;
    line-height: 150%;
  }
`;

const Section = styled.section`
  padding: 40px 0 42px;
  border-top: 2px solid rgba(31, 32, 42, 0.1);
  border-bottom: 2px solid rgba(31, 32, 42, 0.1);
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 57px 1fr;
  grid-column-gap: 30px;

  @media screen and (max-width: 420px) {
    padding: 20px 0 30px;
    grid-template-columns: 1fr;
    grid-template-rows: 43px 1fr;
    grid-row-gap: 12px;
    margin-bottom: 50px;
  }
`;

const SectionNote = ({ data }) => {
  return (
    <Section>
      <Icon name="26" />
      <Text>{data}</Text>
    </Section>
  );
};

export default SectionNote;
