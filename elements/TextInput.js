import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 10px;
  width: 100%;
  max-width: 410px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  p {
    position: absolute;
    bottom: -31px;
    left: 0;
    font-size: 16px;
    line-height: 21px;
  }

  input {
    font-family: 'TT Norms', 'Arial', sans-serif;
    box-sizing: border-box;
    padding: 0;
    padding-bottom: 4px;
    width: 100%;
    font-size: 20px;
    line-height: 32px;
    border: none;
    border-bottom: 1px solid rgba(32, 31, 42, 0.3);
    outline: none;
    transition: all 0.2s;
    touch-action: manipulation;
    -webkit-appearance: none;

    @media (max-width: 768px) {
      padding-bottom: 3px;
      font-size: 16px;
      line-height: 22px;
    }

    &::placeholder {
      font-family: 'TT Norms', 'Arial', sans-serif;
      font-weight: 500;
      color: #201f2a;
      transition: inherit;
      opacity: 0;
    }

    &:focus {
      border-bottom: 1px solid #5faf52;
    }
  }

  input:placeholder-shown + label {
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: text;
    transform-origin: left bottom;
    transform: translate(0, 2.125rem) scale(1.1);
  }

  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0, 8px) scale(1);

    &:hover {
      color: rgba(32, 31, 42, 0.5);
    }
  }

  label {
    margin-bottom: 16px;
    transition: all 0.2s;
    touch-action: manipulation;
    font-size: 16px;
    line-height: 21px;
    color: rgba(32, 31, 42, 0.5);

    @media (max-width: 768px) {
      font-size: 13px;
      line-height: 22px;
    }

    &:hover {
      color: rgba(32, 31, 42, 1);
    }
  }
`;

const TextInput = ({
  type = 'text',
  name,
  label,
  className,
  required = true,
}) => {
  return (
    <Wrapper className={className}>
      <p>Фамилия не может содержать цифры</p>
      <input
        type={type}
        placeholder=" "
        name={name}
        id={name}
        autoComplete="off"
        required={required}
      />
      <label htmlFor={name}>{label}</label>
    </Wrapper>
  );
};

export default TextInput;
