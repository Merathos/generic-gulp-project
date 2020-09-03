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
  Aside
} from './styles';

const SidebarArticle = props => {
  const {
    data: { title, subtitle, description, text, button, icon, picture },
    type
  } = props;
  return (
    <>
      {
        {
          'icon': (
            <SectionIcon>
              <StyledIcon name={icon} />
              <H5 content={title} />
              <Subtitle>{description}</Subtitle>
            </SectionIcon>
          ),
          'default': (
            <Section>
              <Subtitle>{subtitle}</Subtitle>
              <Title content={title} />
              <Link href="/about">
                <a>
                  <ArrowRight />
                </a>
              </Link>
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
