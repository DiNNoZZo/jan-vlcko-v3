import React, { Fragment, useContext } from 'react';
import AnimationContext from '../../store/animation-context';

import TextArea from '../ui/text-area/text-area';
import Text from '../ui/text';
import SecondTitle from '../titles/second-title';
import ContactForm from '../contact/contact-form/contact-form';
import MapBox from '../map-box/map-box';

import classes from './contact-page.module.scss';

function ContactPage() {
  const AnimCtx = useContext(AnimationContext);

  return (
    <Fragment>
      <TextArea styles={classes['area--contact']}>
        <header>
          <SecondTitle title="Kontaktuj&nbsp;ma" />
        </header>
        <Text data-aos={AnimCtx.fadeRight}>
          Pre ďalšie otázky ma neváhajte kontaktovať cez formulár.
        </Text>
        <ContactForm data-aos={AnimCtx.fadeUp} />
      </TextArea>
      <MapBox data-aos={AnimCtx.fadeLeft} />
    </Fragment>
  );
}

export default ContactPage;
