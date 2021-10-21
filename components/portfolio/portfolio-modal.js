import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import AnimationContext from '../../store/animation-context';
import Text from '../../components/ui/text';
import TextArea from '../../components/ui/text-area/text-area';
import Button from '../../components/ui/button/button';

import classes from './portfolio-modal.module.scss';

function PortfolioModal({ onClose, item }) {
  useEffect(() => {
    const height = document.querySelector('[class*=modal__img]');
    console.dir(height);
  }, []);

  const animCtx = useContext(AnimationContext);
  return (
    <aside className={classes.modal__background} onClick={onClose}>
      <div data-aos={animCtx.zoomInDown} className={classes.modal}>
        <div className={classes.modal__img__area}>
          <Image
            className={classes.modal__img}
            id={item.id}
            src={item.src}
            alt={item.alt}
            layout={'responsive'}
            width={item.size.width}
            height={item.size.height}
          />
        </div>
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
          <h3 className={classes.modal__title}>{item.name}</h3>
          <Text>{item.description}</Text>
          <strong>{item.language.join(' | ')}</strong>
          <div className={classes.modal__buttons}>
            <Button
              href={item.url}
              type="button"
              blank={item.name === 'Jan-Vlcko' ? false : true}
            >
              Preview
            </Button>
            <Button href={item.gitUrl} blank={true}>
              Git repo
            </Button>
          </div>
        </TextArea>
      </div>
    </aside>
  );
}

export default PortfolioModal;
