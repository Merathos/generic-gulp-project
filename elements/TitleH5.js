import styled from 'styled-components';

const Styled = styled.h5`
  font-size: 16px;
  line-height: 131%;
  font-weight: 600;

  a {
    color: #53b443;
    font-weight: bold;
    display: inline;

    &:hover {
      color: #339722;
    }
  }
`;

const TitleH5 = ({ dangerouslySetInnerHTML, children, className }) => (
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

export default TitleH5;
