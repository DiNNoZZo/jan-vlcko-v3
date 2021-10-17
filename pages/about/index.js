import React, { Fragment } from 'react';
import Head from 'next/head';

import Text from '../../components/ui/text';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Button from '../../components/ui/button/button';
import ProgLang from '../../components/prog-lang/prog-lang';

function AboutPage() {
  return (
    <Section>
      <Head>
        <title>Ján Vlčko | O mne</title>
      </Head>
      <TextArea>
        <header>
          <SecondTitle title="Ja,&nbsp;O&nbsp;mne,&nbsp;Ja&nbsp;o&nbsp;sebe">
            Ja, O mne, <br /> Ja o sebe
          </SecondTitle>
        </header>
        <Text>
          Ahoj! Som Front-end developer a žijem na Slovensku. Mojim cielom je
          tvoriť krásne stránky pre klientov s intuitívnym UI rozhraním a
          všeliakými efektmi či animáciami.
        </Text>
        <Text>
          Mám veľký zmysel pre detail, dávam do práce vždy maximum, rád sa učím
          nové veci a veci robiť lepšími. Kritiku neberiem osobne, zoberiem si z
          toho to čo mi pomôže.
        </Text>
        <Text>
          Moje záľuby sú pracovať na sebe a svojich cieloch, pre oddych si
          zájdem do kina na dobrý film, alebo sadnem na bicykel a prejdem sa po
          horách.
        </Text>
        <Text>
          <Button link="/contact">Poďme spraviť niečo špeciálne</Button>
        </Text>
      </TextArea>
      <ProgLang />
    </Section>
  );
}

export default AboutPage;
