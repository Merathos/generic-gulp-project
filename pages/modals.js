import mock from 'mock/index';
import styled from 'styled-components';
import { useState } from 'react';
import { FormModal, SuccessModal } from 'containers';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 200px;
  padding-bottom: 200px;
`;

const ModalsPreview = () => {
  const [jobIsShown, setjobIsShown] = useState(false);
  const [successIsShown, setSuccessIsShown] = useState(false);

  function toggleJobModal() {
    setjobIsShown(prev => !prev);
  }

  function toggleSuccess() {
    setSuccessIsShown(prev => !prev);
  }

  return (
    <main>
      <Container>
        <a onClick={toggleJobModal}>Application for a job</a>
      </Container>
      <FormModal modalIsOpen={jobIsShown} closeModal={toggleJobModal}>
        <h1>ФДЫВРОФЖДЫОПРВФДЫОВ</h1>
      </FormModal>
      {/* <SuccessModal
        data={data.newsModal.confirmation}
        successIsShown={successIsShown}
        closeSuccess={toggleSuccess}
      /> */}
    </main>
  );
};

export default ModalsPreview;
