import React, { Fragment } from 'react';
import Text from '../../components/ui/text';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Button from '../../components/ui/button/button';
import ProgLang from '../../components/prog-lang/prog-lang';

function AboutPage() {
  return (
    <Section>
      <TextArea>
        <header>
          <SecondTitle title="Ja, O mne, Ja o sebe" />
        </header>
        <Text>
          Ahoj! Som Front-end developer a žijem na Slovensku. Mojim cielom je
          tvoriť krásne stránky pre klientov s intuitívnym UI rozhraním a
          všeliakými efektami či animáciami.
        </Text>
        <Text>
          Mám veľký zmysel pre detail, dávam do práce vždy maximum, rád sa učím
          nové veci a veci lepšie robiť. Kritiku neberiem osobne, zoberiem si z
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
