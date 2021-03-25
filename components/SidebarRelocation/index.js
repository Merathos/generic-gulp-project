import styled from 'styled-components';
import Link from 'next/link';
import { TitleH4, Subtitle } from 'elements';
import ArrowRight from 'public/icons/arrow-right.svg';

const H4 = styled(TitleH4)`
  margin-bottom: 30px;

  @media screen and (max-width: 420px) {
    margin-bottom: 7px;
  }
`;

const Section = styled.section`
  text-align: left;
  width: 254px;
  max-width: 254px;
  overflow: visible;
  padding: 50px;
  margin: -50px;
  position: relative;

  @media screen and (max-width: 1240px) {
    padding: 0;
    margin: 0;
    margin-top: 100px;
    margin-bottom: 100px !important;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 50px !important;
  }
`;

const RelocationBackground = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  width: 340px;
  height: 340px;
  z-index: -1;
  background-image: url('/backgrounds/relocation.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform: rotate(90deg);
  animation: 45s linear infinite rotation;

  @media screen and (max-width: 1240px) {
    width: 300px;
    height: 300px;
    top: -85px;
    left: -20px;
  }

  @media screen and (max-width: 500px) {
    width: 260px;
    height: 260px;
    top: -85px;
    left: 20px;
  }

  @keyframes rotation {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(450deg);
    }
  }
`;

const StyledArrow = styled.a`
  svg {
    fill: #ffffff;
  }

  svg {
    path {
      transition: all 0.3s ease;

      :first-child {
        fill: white;
        stroke: #201f2a;
      }

      :last-child {
        fill: black;
        stroke: none;
      }
    }
  }

  &:hover {
    path:first-child {
      fill: #53b443;
      stroke: #53b443;
    }

    path:last-child {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }

  &:active {
    path:first-child {
      fill: #339722;
      stroke: #339722;
    }

    path:last-child {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 60px;

  @media screen and (max-width: 420px) {
    margin-bottom: 30px;
  }
`;

const SidebarRelocation = ({ title, subtitle, href }) => {
  return (
    <Section>
      <H4>{title}</H4>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <Link href={href} passHref>
        <StyledArrow>
          <ArrowRight />
        </StyledArrow>
      </Link>
      <RelocationBackground />
    </Section>
  );
};

export default SidebarRelocation;
