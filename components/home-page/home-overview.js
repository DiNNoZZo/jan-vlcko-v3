import React, { Fragment, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import AnimationContext from '../../store/animation-context';

import ContactPage from '../contact/contact-page';
import Text from '../ui/text';
import Section from '../ui/section/section';
import TextArea from '../ui/text-area/text-area';
import Button from '../ui/button/button';
import MainTitle from '../titles/main-title';
import SecondTitle from '../titles/second-title';
import Portfolio from '../portfolio/portfolio';
import ProgLang from '../prog-lang/prog-lang';

import classes from './home-overview.module.scss';

function HomeOverview() {
  const { pathname } = useRouter();
  const AnimCtx = useContext(AnimationContext);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, [pathname]);

  return (
    <Fragment>
      <Section styles={{ height: '100vh', display: 'flex' }}>
        <TextArea otherClasses={classes['title--area']}>
          <MainTitle />
          <p data-aos={AnimCtx.fadeUp} className={classes.title__desc}>
            Front End Developer / React / Next
          </p>
          <div data-aos={AnimCtx.fadeUp}>
            <Button href={'/contact'}>Napíš mi!</Button>
          </div>
        </TextArea>
      </Section>
      <Section styles={{ minHeight: 'auto' }}>
        <TextArea style={{ width: '100%' }}>
          <header>
            <SecondTitle title="Moje&nbsp;Portfólio"></SecondTitle>
          </header>
          <Text data-aos={AnimCtx.fadeRight}>
            Ukážka zopár projektov na ktorých som pracoval zo skvelími ľuďmi.{' '}
            <br /> Pre ďalšie projekty vám stačí prejsť na moju{' '}
            <Button link={'/portfolio'}>work page.</Button>{' '}
          </Text>
          <div data-aos={AnimCtx.fadeRight}>
            <Button href={'/portfolio'}>Pozri viac!</Button>
          </div>
        </TextArea>
      </Section>
      <Portfolio data-aos={AnimCtx.fadeUp} />
      <Section flexRow={true}>
        <TextArea>
          <header>
            <SecondTitle title="S&nbsp;čím&nbsp;pracujem" />
          </header>
          <Text data-aos={AnimCtx.fadeRight}>
            Primárne sa sústreďujem na front-end. <strong>HTML</strong>,{' '}
            <strong>CSS/CSS3</strong>, <strong>JavaScript</strong>. Moje priame
            sústredenie získal framework <strong>React</strong>, ktorý ma
            najviac zaujal spomedzi ostatných. Príde mi taká zlatá stredná cesta
            medzi Vue a Angularom. Okrajovo som skúšal aj prácu s nimi.
            Neoddelitelnou súčasťou je aj znalosť <strong>GitHub-u</strong>.
          </Text>
          <Text data-aos={AnimCtx.fadeRight}>
            Aktívne sa venuj zdokonaleniu v{' '}
            <strong>Materail-UI a TypeScripte</strong>. Nasledujúci projkt bude
            v Reacte s Materail-UI a Next.js. Bude to web aplikácia pre značenie
            denních aj časovo dlhších úloh.
          </Text>
          <Text data-aos={AnimCtx.fadeRight}>
            Prehľad mojich skúseností v aktuálnych{' '}
            <Button link="/skills">web technológiách</Button>.
          </Text>
        </TextArea>
        <ProgLang data-aos={AnimCtx.fadeLeft} />
      </Section>
      <Section flexRow={true}>
        <ContactPage />
      </Section>
    </Fragment>
  );
}

export default HomeOverview;
