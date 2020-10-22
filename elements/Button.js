import styled from 'styled-components';

const Accent = styled.a`
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  background: #fb5235;
  border-radius: 8px;
  padding: 0 32px;
  color: #ffffff;
  display: inline-block;

  @media screen and (max-width: 640px) {
    font-size: 12px;
    line-height: 56px;
    ${props => props.behavior === 'disappear' && `display:none`}
  }
`;

const Default = styled.a`
  font-weight: bold;
  font-size: 18px;
  line-height: 70px;
  color: #fb5235;
  border: 2px solid rgba(32, 31, 42, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 32px;
  box-sizing: border-box;
  display: inline-block;

  @media screen and (max-width: 420px) {
    font-size: 12px;
    line-height: 56px;
  }
`;

const Button = ({ type = 'default', behavior, children, className }) => (
  <>
    {
      {
        accent: (
          <Accent className={className} behavior={behavior}>
            {children}
          </Accent>
        ),
        default: <Default className={className}>{children}</Default>
      }[type]
    }
  </>
);

export default Button;
