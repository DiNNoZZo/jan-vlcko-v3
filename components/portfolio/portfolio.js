/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import PortfolioModal from './portfolio-modal';

import classes from './portfolio.module.scss';

const DUMMY_DATA = [
  {
    id: 'i1',
    name: 'Jan-Vlcko',
    description:
      'Moja osobná stránka. Budem tu prezentovať svoj rast, porjekty a všetky moje nápady. Stránku som vytvosil v Reacte za pomoci Next.js. Jedná sa o prezenčnú stránku predovšetkým môjho IT života',
    language: ['React.js', 'Next.js', 'JavaScript', 'SCSS'],
    src: '/img/Jan-Vlcko.jpg',
    alt: 'Ján Vlčko',
  },
  {
    id: 'i2',
    name: 'basic-validation',
    description:
      'Táto stránka je test jednoduchej validácií inputu, len za pomoci cistého JavaScriptu a pár if checks',
    language: ['HTML', 'JavaScript', 'SCSS'],
    src: '/img/Basic-validation.jpg',
    alt: 'Ján Vlčko validation page',
  },
  {
    id: 'i3',
    name: 'simple calculator',
    description:
      'Na tejto stránke najdeme jednoduchú kalkulačku. Napíšal som ju s pravidlami OOP v JavaScripte.',
    language: ['HTML', 'JavaScript', 'OOP', 'SCSS'],
    src: '/img/Calculator.jpg',
    alt: 'Ján Vlčko calculator',
  },
  {
    id: 'i4',
    name: 'Pi(g)ck Game',
    description:
      'Hra v ktorej som nevymyslel dizajn a ani logiku hry, ale napísal som ju podla autorovej flowchart. Hádžete kockou a akumulujete si hody ale ak hodíte 1 prídete o všetky nahrané body. Svoje naakumulované body si možte kedykoľvek uložiť do trvalého zisku. Hráč ktorý prvý nazbiera 100+ bodov v trvalom zisku vyhral.',
    language: ['JavaScript'],
    src: '/img/Pi(g)ck-game.jpg',
    alt: 'Ján Vlčko Pi(g)ck game',
  },
  {
    id: 'i5',
    name: 'Do the Work',
    description:
      'Hra v ktorej som nevymyslel dizajn a ani logiku hry, ale napísal som ju podla autorovej flowchart. Hádžete kockou a akumulujete si hody ale ak hodíte 1 prídete o všetky nahrané body. Svoje naakumulované body si možte kedykoľvek uložiť do trvalého zisku. Hráč ktorý prvý nazbiera 100+ bodov v trvalom zisku vyhral.',
    language: ['React.js', 'Next.js', 'JavaScript', 'SCSS'],
    src: '/img/cat-5.jpg',
    alt: 'Ján Vlčko Do the Work',
  },
];

function Portfolio() {
  const [data, setData] = useState(DUMMY_DATA);
  const [pageData, setPageData] = useState(null);

  const getId = (e) => {
    return e.target.id;
  };

  const buildPage = (e) => {
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
      <ul className={classes.portfolio}>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              className={classes.portfolio__item}
              onClick={buildPage}
            >
              <img
                id={item.id}
                className={classes.portfolio__img}
                src={item.src}
                alt={item.alt}
              ></img>
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
