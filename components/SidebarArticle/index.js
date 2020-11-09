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
} from './styles';

const SidebarArticle = props => {
  const {
    data: { title, subtitle, description, text, button, icon, picture, link },
    type,
    fromEditor,
  } = props;
  return (
    <>
      {
        {
          'icon': (
            <SectionIcon>
              {fromEditor ? (
                <>
                  <StyledIcon name={26} />
                  <H5>{title}</H5>
                  <Subtitle>{text}</Subtitle>
                </>
              ) : (
                <>
                  <StyledIcon name={icon} />
                  <H5>{title}</H5>
                  <Subtitle>{description}</Subtitle>
                </>
              )
              }
            </SectionIcon>
          ),
          'default': (
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
          'button': (
            <SectionButton>
              <Text>{text}</Text>
              <Button type="accent">{button}</Button>
            </SectionButton>
          ),
          'image': (
            <Aside>
              <Image src={picture} alt={title} />
              <Title>{title}</Title>
              <Subtitle>{text}</Subtitle>
            </Aside>
          )
        }[type]
      }
    </>
  );
};

export default SidebarArticle;
