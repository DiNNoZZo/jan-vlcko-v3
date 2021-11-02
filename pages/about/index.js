import React, { useContext } from 'react';
import Head from 'next/head';
import AnimationContext from '../../store/animation-context';

import Text from '../../components/ui/text';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Button from '../../components/ui/button/button';
import ProgLang from '../../components/prog-lang/prog-lang';

function AboutPage() {
  const AnimCtx = useContext(AnimationContext);

  return (
    <Section>
      <Head>
        <title>Ján Vlčko | O mne</title>
        <meta name="description" content="Niečo málo o mne a mojich cieloch." />
      </Head>
      <TextArea>
        <header>
          <SecondTitle
            title="Ja,&nbsp;O&nbsp;mne,"
            style={{ marginBottom: '0' }}
          />
          <SecondTitle title="Ja&nbsp;o&nbsp;sebe" />
        </header>
        <Text data-aos={AnimCtx.fadeRight}>
          Ahoj! Som Front-end developer a žijem na Slovensku. Mojim cielom je
          tvoriť krásne stránky pre klientov s intuitívnym UI rozhraním a
          všeliakými efektmi či animáciami.
        </Text>
        <Text data-aos={AnimCtx.fadeRight}>
          Mám veľký zmysel pre detail, dávam do práce vždy maximum, rád sa učím
          nové veci a veci robiť lepšími. Kritiku neberiem osobne, zoberiem si z
          toho to čo mi pomôže.
        </Text>
        <Text data-aos={AnimCtx.fadeRight}>
          Moje záľuby sú pracovať na sebe a svojich cieloch, pre oddych si
          zájdem do kina na dobrý film, alebo sadnem na bicykel a prejdem sa po
          horách.
        </Text>
        <Text data-aos={AnimCtx.fadeRight}>
          <Button link="/contact">Poďme spraviť niečo špeciálne</Button>
        </Text>
      </TextArea>
      <ProgLang data-aos={AnimCtx.fadeLeft} />
    </Section>
  );
}

export default AboutPage;
