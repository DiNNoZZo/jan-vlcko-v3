import React from 'react';
import Head from 'next/head';

import Contact from '../../components/contact/contact-page';
import Section from '../../components/ui/section/section';

function ContactPage() {
  return (
    <Section>
      <Head>
        <title>Ján Vlčko | Kontakt</title>
      </Head>
      <Contact />
    </Section>
  );
}

export default ContactPage;
