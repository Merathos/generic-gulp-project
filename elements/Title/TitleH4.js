import styled from 'styled-components';

const Styled = styled.h4`
  font-size: 24px;
  line-height: 120%;
  font-weight: 600;

  a {
    color: #53b443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

const TitleH4 = ({ dangerouslySetInnerHTML, children, className }) => (
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

export default TitleH4;
