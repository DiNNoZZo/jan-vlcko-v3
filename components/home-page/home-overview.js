import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Aos from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.history.scrollRestoration = 'manual';
  }, [pathname]);

  return (
    <Fragment>
      <Section styles={{ height: '100vh', display: 'flex' }}>
        <TextArea styles={classes['title--area']}>
          <MainTitle />
          <p data-aos="fade-right" className={classes.title__desc}>
            Front End Developer / React / Next
          </p>
          <Button data-aos="fade-right" href={'/contact'}>
            Napíš mi!
          </Button>
        </TextArea>
      </Section>
      <Section styles={{ minHeight: 'auto' }}>
        <TextArea style={{ width: '100%' }}>
          <header>
            <SecondTitle title="Moje&nbsp;Portfólio"></SecondTitle>
          </header>
          <Text>
            Ukážka zopár projektov na ktorých som pracoval zo skvelími ľuďmi.{' '}
            <br /> Pre ďalšie projekty vám stačí prejsť na moju{' '}
            <Button link={'/portfolio'}>work page.</Button>{' '}
          </Text>
          <Button href={'/portfolio'}>Pozri viac!</Button>
        </TextArea>
      </Section>
      <Portfolio />
      <Section flexRow={true}>
        <TextArea>
          <header>
            <SecondTitle title="S&nbsp;čím&nbsp;pracujem" />
          </header>
          <Text>
            Primárne sa sústreďujem na front-end. <strong>HTML</strong>,{' '}
            <strong>CSS/CSS3</strong>, <strong>JavaScript</strong>. Moje priame
            sústredenie získal framework <strong>React</strong>, ktorý ma
            najviac zaujal spomedzi ostatných. Príde mi taká zlatá stredná cesta
            medzi Vue a Angularom. Okrajovo som skúšal aj prácu s nimi.
            Neoddelitelnou súčasťou je aj znalosť <strong>GitHub-u</strong>.
          </Text>
          <Text>
            Aktívne sa venuj zdokonaleniu v{' '}
            <strong>Materail-UI a TypeScripte</strong>. Nasledujúci projkt bude
            v Reacte s Materail-UI a Next.js. Bude to web aplikácia pre značenie
            denních aj časovo dlhších úloh.
          </Text>
          <Text>
            Prehľad mojich skúseností v aktuálnych{' '}
            <Button link="/skills">web technológiách</Button>.
          </Text>
        </TextArea>
        <ProgLang />
      </Section>
      <Section flexRow={true}>
        <ContactPage />
      </Section>
    </Fragment>
  );
}

export default HomeOverview;
