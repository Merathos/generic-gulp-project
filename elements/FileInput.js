import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 280px;

  &:hover {
    cursor: pointer;
    span {
      color: #339722;
    }
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }

  img {
    margin-right: 20px;
    width: 57px;
    height: 57px;

    @media (max-width: 768px) {
      margin-right: 14px;
      width: 40px;
      height: 40px;
    }
  }

  span {
    margin-bottom: 4px;
    display: block;
    font-size: 20px;
    line-height: 27px;
    font-weight: 700;
    color: #53b443;
    transition: all 0.2s ease-in;

    @media (max-width: 768px) {
      margin-bottom: 2px;
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding-top: 5px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const FileExt = styled.p`
  font-size: 14px;
  line-height: 19px;
  opacity: 0.5;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 10px;
    line-height: 16px;
  }
`;

const FileInput = ({ id, name, label, fileExt }) => {
  return (
    <Label>
      <input type="file" id={id} name={name}></input>
      <img src="icons/file-input.png" width="57" height="57" />
      <Container>
        <span>{label}</span>
        <FileExt>{fileExt}</FileExt>
      </Container>
    </Label>
  );
};

export default FileInput;
