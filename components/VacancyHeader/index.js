
import { Features } from 'components';
import {
  Section,
  Wrapper,
  H1,
  TextBlock,
  Bold,
  StyledText,
  StyledButton
} from './styles';

const VacancyHeader = ({ data }) => {
  const {
    name,
    stacks,
    is_relocation,
    is_internship,
    is_english_speaking_team,
    project
  } = data;

  const features = [
    {
      icon: 19,
      title: `English Speaking Team`,
      flag: is_english_speaking_team
    },
    {
      icon: 18,
      title: `Стажировка`,
      flag: is_internship
    },
    {
      icon: 26,
      title: `Релокация`,
      flag: is_relocation
    }
  ];

  return (
    <Section>
      <Wrapper>
        <Features data={features} />
      </Wrapper>
      <H1>{name}</H1>
      <TextBlock>
        <Bold>Technology Stack:</Bold>
        {stacks.map(el => (
          <StyledText>{el.name}</StyledText>
        ))}
      </TextBlock>
      <TextBlock>
        <Bold>Проект:</Bold>
        <StyledText>{project.name}</StyledText>
      </TextBlock>
      <StyledButton type="accent">Отправить резюме</StyledButton>
    </Section>
  );
};

export default VacancyHeader;