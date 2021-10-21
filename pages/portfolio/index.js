import React, { useContext } from 'react';
import Head from 'next/head';
import AnimationContext from '../../store/animation-context';

import Text from '../../components/ui/text';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Portfolio from '../../components/portfolio/portfolio';
import Button from '../../components/ui/button/button';

function PortfolioPage() {
  const animCtx = useContext(AnimationContext);
  return (
    <Section styles={{ paddingLeft: '0', paddingRight: '0', display: 'flex' }}>
      <Head>
        <title>Ján Vlčko | Portfólio</title>
        <meta
          name="description"
          content="Galéria mojich hotových projektov s odkazmi na Github"
        />
      </Head>
      <Portfolio data-aos={animCtx.fadeUp} modal={true} />
    </Section>
  );
}

export default PortfolioPage;
