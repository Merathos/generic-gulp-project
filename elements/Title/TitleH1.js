import styled from 'styled-components';

const Styled = styled.h1`
  font-size: 90px;
  line-height: 100px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 40px;

  a {
    color: #53b443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }

  @media screen and (max-width: 1360px) {
    font-size: 54px;
    line-height: 60px;
  }

  @media screen and (max-width: 767px) {
    font-size: 32px;
    line-height: 31px;
    margin-bottom: 20px;
  }
`;

const TitleH1 = ({ dangerouslySetInnerHTML, children, className }) => (
  <>
    {dangerouslySetInnerHTML ? (
      <Styled
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        className={className}
      />
    ) : (
      <Styled className={className}>{children}</Styled>
    )}
  </>
);

export default TitleH1;
