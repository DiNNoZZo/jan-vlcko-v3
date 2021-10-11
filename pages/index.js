import React, { Fragment } from 'react';
import Head from 'next/head';

import HomeOverview from '../components/home-page/home-overview';

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Ján Vlčko | Domov</title>
      </Head>
      <HomeOverview />
    </Fragment>
  );
}

export default HomePage;
