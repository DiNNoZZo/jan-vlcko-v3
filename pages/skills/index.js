import React, { useContext } from 'react';
import Head from 'next/head';
import AnimationContext from '../../store/animation-context';

import Text from '../../components/ui/text';
import SkillBars from '../../components/skill-bars/skill-bars';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Button from '../../components/ui/button/button';

function MySkillsPage() {
  const animCtx = useContext(AnimationContext);
  return (
    <Section flexRow={true}>
      <Head>
        <title>Ján Vlčko | Skúsenosti</title>
        <meta
          name="description"
          content="Moje skúsenosti v oblasti programovania"
        />
      </Head>
      <TextArea>
        <header>
          <SecondTitle title="Znalosti&nbsp;&&nbsp;Skúsenosti" />
        </header>
        <Text data-aos={animCtx.fadeRight}>
          Ako samouk sa učím programovať už 2 roky za ktoré som sa stihol
          poriadne a do podrobna zoznámiť s HTML a CSS/CSS3. Neskôr som prešiel
          aj na JavaScript, ktorý ma baví dodnes a je to môj smer.
        </Text>
        <Text data-aos={animCtx.fadeRight}>
          Aktívne sa venuj zdokonaleniu v{' '}
          <strong>Materail-UI a TypeScripte</strong>. Nasledujúci projkt bude v
          Reacte s Materail-UI a Next.js. Bude to web aplikácia pre značenie
          denních aj časovo dlhších úloh.
        </Text>
        <Text data-aos={animCtx.fadeRight}>
          Veľmi ma zaujíma aj Back-end, dokážem naprogramovať jednoduché
          back-end stránký. Moje hlavné smery ako som spomenul sú celkovo
          JavaScript FE aj BE, React.
        </Text>
        <Text data-aos={animCtx.fadeRight}>
          Pre viac informácií ma <Button link="/contact">contaktujte</Button>
        </Text>
      </TextArea>
      <SkillBars />
    </Section>
  );
}

export default MySkillsPage;
