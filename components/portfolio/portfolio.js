import React, { Fragment, useState, useContext } from 'react';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import PortfolioModal from './portfolio-modal';
import Loader from '../ui/loader/loader';
import AnimationContext from '../../store/animation-context';

import classes from './portfolio.module.scss';
import 'aos/dist/aos.css';

const DUMMY_DATA = [
  {
    id: 'i1',
    name: 'Jan-Vlcko',
    description:
      'Moja osobná stránka. Budem tu prezentovať svoj rast, porjekty a všetky moje nápady. Stránku som vytvosil v Reacte za pomoci Next.js. Jedná sa o prezenčnú stránku predovšetkým môjho IT života',
    language: ['React.js', 'Next.js', 'JavaScript', 'SCSS'],
    src: '/img/Jan-Vlcko.jpg',
    size: {
      width: 900,
      height: 1800,
    },
    alt: 'Ján Vlčko',
    url: '/',
    gitUrl: 'https://github.com/DiNNoZZo/jan-vlcko-v3',
  },
  {
    id: 'i2',
    name: 'basic-validation',
    description:
      'Táto stránka je test jednoduchej validácií inputu, len za pomoci cistého JavaScriptu a pár if checks. Plus môžete mazať užívateľov klikom na nich.',
    language: ['HTML', 'JavaScript', 'SCSS'],
    src: '/img/Basic-validation.jpg',
    size: {
      width: 900,
      height: 500,
    },
    alt: 'Ján Vlčko validation page',
    url: 'https://jv-basic-validation.netlify.app/',
    gitUrl: 'https://github.com/DiNNoZZo/basic-validation',
  },
  {
    id: 'i3',
    name: 'simple calculator',
    description:
      'Na tejto stránke najdeme jednoduchú kalkulačku. Napíšal som ju s pravidlami OOP v JavaScripte.',
    language: ['HTML', 'JavaScript', 'OOP', 'SCSS'],
    src: '/img/Calculator.jpg',
    size: {
      width: 900,
      height: 500,
    },
    alt: 'Ján Vlčko calculator',
    url: 'https://jv-calc.netlify.app/',
    gitUrl: 'https://github.com/DiNNoZZo/calculator',
  },
  {
    id: 'i4',
    name: 'Pi(g)ck Game',
    description:
      'Hra v ktorej som nevymyslel dizajn a ani logiku hry, ale napísal som ju podla autorovej flowchart. Hádžete kockou a akumulujete si hody ale ak hodíte 1 prídete o všetky nahrané body. Svoje naakumulované body si možte kedykoľvek uložiť do trvalého zisku. Hráč ktorý prvý nazbiera 100+ bodov v trvalom zisku vyhral.',
    language: ['JavaScript'],
    src: '/img/Pi(g)ck-game.jpg',
    size: {
      width: 900,
      height: 500,
    },
    alt: 'Ján Vlčko Pi(g)ck game',
    url: 'http://jv-roll-dice.netlify.app/',
    gitUrl: 'https://github.com/DiNNoZZo/RollDiceGame',
  },
  {
    id: 'i5',
    name: 'Do the Work',
    description:
      'Hra v ktorej som nevymyslel dizajn a ani logiku hry, ale napísal som ju podla autorovej flowchart. Hádžete kockou a akumulujete si hody ale ak hodíte 1 prídete o všetky nahrané body. Svoje naakumulované body si možte kedykoľvek uložiť do trvalého zisku. Hráč ktorý prvý nazbiera 100+ bodov v trvalom zisku vyhral.',
    language: ['React.js', 'Next.js', 'TypeScript', 'Material-UI'],
    src: '/img/cat-5.jpg',
    size: {
      width: 900,
      height: 1400,
    },
    alt: 'Ján Vlčko Do the Work',
    url: 'http://',
    gitUrl: 'https://',
  },
];

function Portfolio(props) {
  const animCtx = useContext(AnimationContext);
  const [data, setData] = useState(DUMMY_DATA);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(props.modal);

  const dataAos = props['data-aos'] ? props['data-aos'] : null;

  const getId = (e) => {
    return e.target.id;
  };

  const buildModalPage = (e) => {
    if (!modal) return;
    const id = getId(e);
    const projectData = data.filter((project) => project.id === id);
    setPageData(...projectData);
  };

  const closeModal = (e) => {
    const background = e.target.closest('aside');

    if (background !== e.target) return;

    setPageData(null);
  };

  return (
    <Fragment>
      <ul data-aos={dataAos} className={classes.portfolio}>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className={classes.portfolio__item}
              onClick={buildModalPage}
            >
              {loading && <Loader />}
              <Image
                id={item.id}
                className={classes.portfolio__img}
                src={item.src}
                alt={item.alt}
                layout={'responsive'}
                width={'300'}
                height={'100%'}
                onLoad={(e) => {
                  e.target.parentNode.style.height = '100%';
                  setTimeout(() => {
                    e.target.style.opacity = '1';
                    setLoading(false);
                  }, animCtx.firstLoadDelay);
                }}
              ></Image>
            </li>
          );
        })}
      </ul>
      {typeof window !== 'undefined' &&
        ReactDOM.createPortal(
          <Fragment>
            {pageData && (
              <PortfolioModal
                onClose={closeModal}
                item={pageData}
              ></PortfolioModal>
            )}
          </Fragment>,
          document.getElementById('modal-window')
        )}
    </Fragment>
  );
}

export default Portfolio;
