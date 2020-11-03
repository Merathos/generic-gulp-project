import mock from 'mock/index';
import styled from 'styled-components';
import { useState } from 'react';
import { FormModal, SuccessModal } from 'containers';
import { JobForm, InternForm } from 'components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  a {
    margin-bottom: 40px;
  }
`;

const ModalsPreview = () => {
  const [successIsShown, setSuccessIsShown] = useState(false);

  const [jobIsShown, setjobIsShown] = useState(false);
  const [interntIsShown, setInterntIsShown] = useState(false);

  function toggleJobModal() {
    setjobIsShown(prev => !prev);
  }

  function toggleInternModal() {
    setInterntIsShown(prev => !prev);
  }

  function toggleSuccess() {
    setSuccessIsShown(prev => !prev);
  }

  return (
    <main>
      <Container>
        <a onClick={toggleJobModal}>Application for a job</a>
        <a onClick={toggleInternModal}>Application for an interntship</a>
      </Container>
      <FormModal modalIsOpen={jobIsShown} closeModal={toggleJobModal}>
        <JobForm
          data={mock.jobForm}
          closeModal={toggleJobModal}
          showSuccess={toggleSuccess}
        />
      </FormModal>
      <FormModal modalIsOpen={interntIsShown} closeModal={toggleInternModal}>
        <InternForm
          data={mock.internForm}
          closeModal={toggleInternModal}
          showSuccess={toggleSuccess}
        />
      </FormModal>
      <SuccessModal
        data={mock.jobForm.confirmation}
        successIsShown={successIsShown}
        closeSuccess={toggleSuccess}
      />
    </main>
  );
};

export default ModalsPreview;
