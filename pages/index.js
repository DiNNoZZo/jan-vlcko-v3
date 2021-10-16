import React, { Fragment } from 'react';
import Head from 'next/head';

import HomeOverview from '../components/home-page/home-overview';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="Autor: Ján VLčko, Rok: 2021." />
        <meta
          name="description"
          content="Cielom je zviditeľnit svoje skúsenosti a ukázanie svohjo protólia pre ďalšie pracovné kontrakty."
        />

        <title>Ján Vlčko | Domov</title>
      </Head>
      <HomeOverview />
    </Fragment>
  );
}

export default HomePage;
