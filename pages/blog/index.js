import React from 'react';
import Head from 'next/head';
import Section from '../../components/ui/section/section';
import SecondTitle from '../../components/titles/second-title';

function BlogPage() {
  return (
    <Section>
      <Head>
        <title>Ján Vlčko | Blog</title>
        <meta name="description" content="Môj budúci blog o programovaní" />
      </Head>
      <SecondTitle title="Blog&nbsp;je&nbsp;ešte&nbsp;vo&nbsp;vývoji" />
    </Section>
  );
}

export default BlogPage;
