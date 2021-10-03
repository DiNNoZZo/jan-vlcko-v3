import React from 'react';

import Text from '../../components/ui/text';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Portfolio from '../../components/portfolio/portfolio';
import Button from '../../components/ui/button/button';

function PortfolioPage() {
  return (
    <Section styles={{ paddingLeft: '0', paddingRight: '0' }}>
      <Portfolio />
    </Section>
  );
}

export default PortfolioPage;
