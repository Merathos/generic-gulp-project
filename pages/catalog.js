import { Layout } from 'containers';
import { useQuery } from "@apollo/react-hooks";
import styled from 'styled-components';
import {
  GreyTitle,
  Paragraph,
  SidebarRelocation,
  Articles,
  SliderVacancy,
  SidebarSlider,
  Requirements,
  Conditions,
  Map,
  Application
} from 'components';
import { ALL_CHARACTERS } from 'graphql/allCharacters';
import { withApollo } from 'lib/apollo'

import mock from 'mock/index';

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    max-width: 315px;
  }

  @media screen and (max-width: 240px) {
    max-width: 280px;
  }
`;

const GreyContainer = styled.div`
  background-color: #F7F8F9;
  background-image: url('backgrounds/vacancy-grey-title.svg');
  background-repeat: no-repeat;
  background-position: 118% 298%;

  @media screen and (max-width: 420px) {
    background-size: 50% 50%;
    background-position: 150% 120%;
  }
`;

const Article = styled.article`
  margin-right: 92px;
  max-width: 854px;

  @media screen and (max-width: 420px) {
    margin-right: 0;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Aside = styled.aside`
  max-width: 254px;

  @media screen and (max-width: 420px) {
    max-width: 100%;
  }
`;

const catalogPage = () => {
  const { loading, error, data } = useQuery(ALL_CHARACTERS);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <Layout backButton>
      <h1>
        <h3>Setting up Apollo GraphQL in Next.js with Server Side Rendering</h3>
      </h1>
      <div>
        {data.characters.results.map(el => (
          <ul key={el.id}>
            <li>{el.name}</li>
          </ul>
        ))}
      </div>
    </Layout>
  );
};

export default withApollo(catalogPage);
