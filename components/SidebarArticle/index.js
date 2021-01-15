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
  Content,
} from './styles';

const SidebarArticle = props => {
  const {
    data: { title, subtitle, description, text, button, icon, picture, link },
    type,
    fromEditor,
    isInternship = false,
    handleSendRequestClick,
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
                  <H5 dangerouslySetInnerHTML={{ __html: title }} />
                  <Subtitle dangerouslySetInnerHTML={{ __html: text }} />
                </>
              ) : (
                <>
                  <StyledIcon name={icon} isInternship={isInternship} />
                  <H5
                    isInternship={isInternship}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <StyledSubtitle
                    isInternship={isInternship}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </>
              )}
            </SectionIcon>
          ),
          default: (
            <Section>
              {fromEditor ? (
                <>
                  <Link href={link}>
                    <Content>
                      <DefaultSubtitle>Читайте также</DefaultSubtitle>
                      <DefaultTitle
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                      <div>
                        <ArrowRight />
                      </div>
                    </Content>
                  </Link>
                </>
              ) : (
                <>
                  <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
                  <Title dangerouslySetInnerHTML={{ __html: title }} />
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
              <Text dangerouslySetInnerHTML={{ __html: text }} />
              <Button type="accent" onClick={handleSendRequestClick}>
                {button}
              </Button>
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
              <Title
                isInternship={isInternship}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <SubtitleWrapper
                isInternship
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </Aside>
          ),
        }[type]
      }
    </>
  );
};

export default SidebarArticle;
