import { useSelector } from 'react-redux';
import { Features } from 'components';
import {
  Section,
  Wrapper,
  H1,
  TextBlock,
  Bold,
  StyledText,
  StyledButton,
  Picture,
} from './styles';

const VacancyHeader = ({ data }) => {
  const english = useSelector(state => state.english);
  const {
    name,
    technology_stacks,
    is_relocation,
    is_internship,
    is_english_speaking_team,
    team,
    category,
  } = data;

  const features = [
    {
      icon: 19,
      title: `English Speaking Team`,
      flag: is_english_speaking_team,
    },
    {
      icon: 18,
      title: `Стажировка`,
      flag: is_internship,
    },
    {
      icon: 26,
      title: `Релокация`,
      flag: is_relocation,
    },
  ];

  return (
    <Section>
      <div>
        {features && (
          <Wrapper>
            <Features data={features} />
          </Wrapper>
        )}
        {name && (
          <H1
            dangerouslySetInnerHTML={{
              __html: name.replace(/\n/g, '<br>'),
            }}
          />
        )}
        {technology_stacks && (
          <TextBlock>
            <Bold>Technology Stack:</Bold>
            <StyledText>{technology_stacks}</StyledText>
          </TextBlock>
        )}
        {team?.name && (
          <TextBlock>
            <Bold>Команда:</Bold>
            <StyledText>{team && team.name}</StyledText>
          </TextBlock>
        )}
        <StyledButton accent>
          {english ? 'Send CV' : 'Отправить резюме'}
        </StyledButton>
      </div>
      {category?.image && (
        <Picture
          src={category.image.path.normal}
          alt={name}
          width="200"
          height="180"
        />
      )}
    </Section>
  );
};

export default VacancyHeader;
