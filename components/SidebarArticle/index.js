import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'elements/Button';
import Subtitle from 'elements/Subtitle';
import ArrowLeft from 'public/icons/arrow-left.svg';
import { Section, Title, Text, H5 } from './styles';

const SidebarArticle = props => {
  const {
    data: { title, subtitle, description, text, button },
    type
  } = props;
  return (
    <Section>
      {
        {
          'icon': (
            <>
              <H5 content={title} />
              <Subtitle content={description} />
            </>
          ),
          'default': (
            <>
              <Subtitle content={subtitle} />
              <Title content={title} />
              <Link href="/about">
                <a>
                  <ArrowLeft />
                </a>
              </Link>
            </>
          ),
          'button': (
            <>
              <Text>{text}</Text>
              <Button type="accent" content={button} />
            </>
          )
        }[type]
      }
    </Section>
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
