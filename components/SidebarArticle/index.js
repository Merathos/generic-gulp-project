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
              <Subtitle content={description} />
            </SectionIcon>
          ),
          'default': (
            <Section>
              <Subtitle content={subtitle} />
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
              <Button type="accent" content={button} />
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
