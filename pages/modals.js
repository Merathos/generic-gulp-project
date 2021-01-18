import form from 'mock/forms';
import styled from 'styled-components';
import { useState } from 'react';
import { FormModal } from 'containers';
import { JobForm, InternForm, SubForm } from 'components';

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
  const [jobIsShown, setjobIsShown] = useState(false);
  const [jobv2IsShown, setjobv2IsShown] = useState(false);
  const [interntIsShown, setInterntIsShown] = useState(false);
  const [mailingIsShown, setMailingIsShown] = useState(false);

  function toggleJobModal() {
    setjobIsShown(prev => !prev);
  }

  function toggleJobv2Modal() {
    setjobv2IsShown(prev => !prev);
  }

  function toggleMailingModal() {
    setMailingIsShown(prev => !prev);
  }

  function toggleInternModal() {
    setInterntIsShown(prev => !prev);
  }

  return (
    <main>
      <Container>
        <a onClick={toggleJobModal}>Application for a job</a>
        <a onClick={toggleInternModal}>Application for an interntship</a>
        <a onClick={toggleJobv2Modal}>Application without a specific job</a>
        <a onClick={toggleMailingModal}>Application for mailing</a>
      </Container>
      <FormModal
        modalIsOpen={jobIsShown}
        closeModal={toggleJobModal}
        successData={form.jobForm.confirmation}
      >
        <JobForm closeModal={toggleJobModal} />
      </FormModal>
      <FormModal
        modalIsOpen={interntIsShown}
        closeModal={toggleInternModal}
        successData={form.internForm.confirmation}
      >
        <InternForm closeModal={toggleInternModal} />
      </FormModal>
      <FormModal
        modalIsOpen={jobv2IsShown}
        closeModal={toggleJobv2Modal}
        successData={form.jobFormV2.confirmation}
      >
        <JobForm closeModal={toggleJobv2Modal} />
      </FormModal>
      <FormModal
        modalIsOpen={mailingIsShown}
        closeModal={toggleMailingModal}
        successData={form.subForm.confirmation}
      >
        <SubForm closeModal={toggleMailingModal} />
      </FormModal>
    </main>
  );
};

export default ModalsPreview;
