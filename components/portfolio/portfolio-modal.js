/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import AnimationContext from '../../store/animation-context';
import Text from '../../components/ui/text';
import SkillBars from '../../components/skill-bars/skill-bars';
import Section from '../../components/ui/section/section';
import TextArea from '../../components/ui/text-area/text-area';
import SecondTitle from '../../components/titles/second-title';
import Button from '../../components/ui/button/button';

import classes from './portfolio-modal.module.scss';

function PortfolioModal(props) {
  const animCtx = useContext(AnimationContext);
  return (
    <aside className={classes.modal__background} onClick={props.onClose}>
      <div data-aos={animCtx.zoomInDown} className={classes.modal}>
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
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3 className={classes.modal__title}>{props.item.name}</h3>
          <Text>{props.item.description}</Text>
          <strong>{props.item.language.join(' | ')}</strong>
          <div className={classes.modal__buttons}>
            <Button
              href={props.item.url}
              type="button"
              blank={props.item.name === 'Jan-Vlcko' ? false : true}
            >
              Preview
            </Button>
            <Button href={props.item.gitUrl} blank={true}>
              Git repo
            </Button>
          </div>
        </TextArea>
      </div>
    </aside>
  );
}

export default PortfolioModal;
