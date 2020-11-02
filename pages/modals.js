import mock from 'mock/index';
import styled from 'styled-components';
import { useState } from 'react';
import { FormModal, SuccessModal } from 'containers';
import { JobForm } from 'components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 200px 30px;
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
        <JobForm
          data={mock.jobForm}
          closeModal={toggleJobModal}
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
