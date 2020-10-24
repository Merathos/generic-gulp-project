import styled from 'styled-components';

const Styled = styled.input`
  margin-bottom: 40px;
  padding-bottom: 18px;
  width: 100%;
  max-width: 410px;
  border: none;
  border-bottom: 1px solid rgba(32, 31, 42, 0.3);
  outline: none;
  font-size: 18px;
  line-height: 24.12px;

  @media (max-width: 768px) {
    margin-bottom: 34px;
    padding-bottom: 8px;
    font-size: 14px;
    line-height: 22.12px;
  }

  &:hover {
    ::placeholder {
      color: #201f2a;
    }
  }

  &:focus {
    border-bottom: 1px solid #5faf52;
  }
`;

const TextInput = ({ placeholder, className }) => (
  <Styled
    type="text"
    className={className}
    placeholder={placeholder}
    name={placeholder}
    required
  />
);

export default TextInput;
