import React, { Fragment } from 'react';
import TextArea from '../ui/text-area/text-area';
import Text from '../ui/text';
import SecondTitle from '../titles/second-title';
import ContactForm from '../contact/contact-form/contact-form';
import MapBox from '../map-box/map-box';

import classes from './contact-page.module.scss';

function ContactPage(props) {
  return (
    <Fragment>
      <TextArea styles={classes['area--contact']}>
        <header>
          <SecondTitle title="Kontaktuj&nbsp;ma" />
        </header>
        <Text>
          Mám záujem o stredné a väčšie výzvy. Pre ďalšie otázky ma neváhajte
          kontaktovať cez formulár.
        </Text>
        <ContactForm />
      </TextArea>
      <MapBox />
    </Fragment>
  );
}

export default ContactPage;
