import { useSelector } from 'react-redux';
import { Features } from 'components';
import ArrowRight from 'public/icons/arrow-right.svg';
import Link from 'next/link';
import {
  Section,
  Wrapper,
  H1,
  TextBlock,
  Bold,
  StyledText,
  StyledButton,
  Picture,
  Content,
  Container,
} from './styles';

const VacancyHeader = ({ data, toggleJobModal }) => {
  const language = useSelector(state => state.language);

  const {
    name,
    technology_stacks,
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
  ];

  return (
    <Container>
      <Section>
        <Content>
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
              <Bold>{language ? 'Technology Stack:' : 'Стек технологий:'}</Bold>
              <StyledText>{technology_stacks}</StyledText>
            </TextBlock>
          )}
          {team?.name && (
            <TextBlock>
              <Bold>{language ? 'Team:' : 'Команда:'}</Bold>
              <StyledText withIcon={team.slug}>
                {team && team.name}
                {team.slug && (
                  <Link href={`/teams/${team.slug}`}>
                    <a>
                      <ArrowRight />
                    </a>
                  </Link>
                )}
              </StyledText>
            </TextBlock>
          )}
          <StyledButton accent onClick={toggleJobModal}>
            {language ? 'Send CV' : 'Отправить резюме'}
          </StyledButton>
        </Content>
      </Section>
      {category?.image && (
        <Picture
          src={category.image.path.normal}
          alt={name}
          width="200"
          height="180"
        />
      )}
    </Container>
  );
};

export default VacancyHeader;
