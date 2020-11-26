import Link from 'next/link';
import { Button, Subtitle } from 'elements';
import ArrowRight from 'public/icons/arrow-right.svg';
import {
  Section,
  SectionIcon,
  SectionButton,
  Title,
  Text,
  H5,
  StyledIcon,
  Image,
  Aside,
  DefaultSubtitle,
  DefaultTitle,
  StyledSubtitle,
  SubtitleWrapper,
} from './styles';

const SidebarArticle = props => {
  const {
    data: { title, subtitle, description, text, button, icon, picture, link },
    type,
    fromEditor,
    isInternship = false,
  } = props;
  return (
    <>
      {
        {
          icon: (
            <SectionIcon isInternship={isInternship}>
              {fromEditor ? (
                <>
                  <StyledIcon name={26} />
                  <H5>{title}</H5>
                  <Subtitle>{text}</Subtitle>
                </>
              ) : (
                <>
                  <StyledIcon name={icon} isInternship={isInternship} />
                  <H5 isInternship={isInternship}>{title}</H5>
                  <StyledSubtitle isInternship={isInternship}>
                    {description}
                  </StyledSubtitle>
                </>
              )}
            </SectionIcon>
          ),
          default: (
            <Section>
              {fromEditor ? (
                <>
                  <DefaultSubtitle>Читайте также</DefaultSubtitle>
                  <DefaultTitle>{title}</DefaultTitle>
                  <Link href={link}>
                    <a>
                      <ArrowRight />
                    </a>
                  </Link>
                </>
              ) : (
                <>
                  <Subtitle>{subtitle}</Subtitle>
                  <Title>{title}</Title>
                  <Link href={link}>
                    <a>
                      <ArrowRight />
                    </a>
                  </Link>
                </>
              )}
            </Section>
          ),
          button: (
            <SectionButton>
              <Text>{text}</Text>
              <Button type="accent">{button}</Button>
            </SectionButton>
          ),
          image: (
            <Aside isInternship={isInternship}>
              <Image
                src={picture}
                alt={title}
                isInternship={isInternship}
                width="143"
                height="143"
              />
              <Title isInternship={isInternship}>{title}</Title>
              <SubtitleWrapper isInternship>{text}</SubtitleWrapper>
            </Aside>
          ),
        }[type]
      }
    </>
  );
};

export default SidebarArticle;
