import React, { Fragment } from 'react';
import Image from 'next/image';

import Section from '../ui/section/section';
import TextArea from '../ui/text-area/text-area';
import MainTitle from '../titles/main-title';
import SecondTitle from '../titles/second-title';
import Portfolio from '../portfolio/portfolio';
import ProgLang from '../prog-lang/prog-lang';
import Text from '../text';
import Button from '../ui/button/button';
import classes from './home-overview.module.scss';

function HomeOverview() {
  return (
    <Fragment>
      <Section styles="full-screen">
        <TextArea>
          <MainTitle />
          <p className={classes.title__desc}>
            Front End Developer / React / Next
          </p>
          <Button href={'/contact'}>Napíš mi!</Button>
        </TextArea>
      </Section>
      <Section>
        <TextArea>
          <header>
            <SecondTitle title={'Moje Portfólio'}></SecondTitle>
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
      <Section styles="grid-screen">
        <TextArea styles="small-width">
          <header>
            <SecondTitle title={'S čím pracujem'} />
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
            Ďalej sa chcem učit a zbierať skúsenosti podľa aktuálnej ponuky a
            projektu. Nemám problém si ďalej{' '}
            <strong>rozširovať svoje znalosti</strong>.
          </Text>
          <Text>
            Prehľad mojich skúseností v aktuálnych{' '}
            <Button link="/skills">web technológiách</Button>.
          </Text>
        </TextArea>
        <ProgLang />
      </Section>
    </Fragment>
  );
}

export default HomeOverview;
