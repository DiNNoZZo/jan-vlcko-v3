/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

import Text from '../../components/ui/text';
import SkillBars from '../../components/skill-bars/skill-bars';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Button from '../../components/ui/button/button';

import classes from './portfolio-modal.module.scss';

function PortfolioModal(props) {
  return (
    <aside className={classes.modal__background} onClick={props.onClose}>
      <div className={classes.modal}>
        <img
          className={classes.modal__img}
          id={props.item.id}
          src={props.item.src}
          alt={props.item.alt}
        ></img>
        <TextArea
          style={{
            backgroundColor: '#1f1f1f',
            padding: '4rem',
            width: '100%',
            color: '#fff',
          }}
        >
          <SecondTitle title={props.item.name} />
          <Text>{props.item.description}</Text>
          <strong>{props.item.language.join(' | ')}</strong>
        </TextArea>
      </div>
    </aside>
  );
}

export default PortfolioModal;
