import { useSelector } from 'react-redux';
import { Features } from 'components';
import ArrowRight from 'public/icons/arrow-right.svg';
import Link from 'next/link';
import { sanitize } from 'isomorphic-dompurify';
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

const VacancyHeader = ({ data, back, toggleJobModal }) => {
  const language = useSelector((state) => state.language);

  const {
    name,
    technology_stacks,
    is_internship,
    is_english_speaking_team,
    team,
    category,
    is_archive: isArchive,
  } = back;

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
          {features && (is_english_speaking_team || is_internship) && (
            <Wrapper>
              <Features data={features} />
            </Wrapper>
          )}
          {name && (
            <H1
              dangerouslySetInnerHTML={{
                __html: sanitize(name),
              }}
              addMarginTop={!(is_english_speaking_team || is_internship)}
            />
          )}
          {technology_stacks && (
            <TextBlock>
              <Bold>
                {language ? data.header.techTitleEn : data.header.techTitle}
              </Bold>
              <StyledText>{technology_stacks}</StyledText>
            </TextBlock>
          )}
          {team?.name && (
            <TextBlock>
              <Bold>
                {language ? data.header.teamTitleEn : data.header.teamTitle}
              </Bold>
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
          {!isArchive && (
            <StyledButton accent onClick={toggleJobModal}>
              {language ? data.application.buttonEn : data.application.button}
            </StyledButton>
          )}
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
