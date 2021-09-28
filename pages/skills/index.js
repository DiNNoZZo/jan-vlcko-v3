import React from 'react';

import Text from '../../components/ui/text';
import SkillBars from '../../components/skill-bars/skill-bars';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Button from '../../components/ui/button/button';

function MySkillsPage() {
  return (
    <Section styles="grid-screen">
      <TextArea>
        <header>
          <SecondTitle title="Znalosti & Skúsenosti" />
        </header>
        <Text>
          Ako samouk sa učím programovať už 2 roky za ktoré som sa stihol
          poriadne a do podrobna zoznámiť s HTML a CSS/CSS3. Neskôr som prešiel
          aj na JavaScript, ktorý ma baví dodnes a je to môj smer.
        </Text>
        <Text>
          Aktuálne sa venujem čistej forme JS pretože sa mi s ňou dobre pracuje,
          rád si programujem veci sám čiže sa snažím vyhýbať zbytočným
          knižniciam. Ďalej sa chcem doučiť React.
        </Text>
        <Text>
          Veľmi ma zaujíma aj Back-end, dokážem naprogramovať jednoduché
          back-end stránký. Moje hlavné smery ako som spomenul sú celkovo
          JavaScript FE aj BE, React.
        </Text>
        <Text>
          Pre viac informácií ma <Button link="/contact">contaktujte</Button>
        </Text>
      </TextArea>
      <SkillBars />
    </Section>
  );
}

export default MySkillsPage;
