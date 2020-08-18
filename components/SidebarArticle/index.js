import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Subtitle, Icon } from 'elements';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Section, SectionIcon, SectionButton, Title, Text, H5, StyledIcon } from './styles';

const SidebarArticle = props => {
  const {
    data: { title, subtitle, description, text, button, icon },
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
          )
        }[type]
      }
    </>
  );
};

SidebarArticle.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string
};

SidebarArticle.defaultProps = {
  type: 'default'
};

export default SidebarArticle;
