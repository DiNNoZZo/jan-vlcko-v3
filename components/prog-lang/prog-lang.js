import React, { Fragment, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import classes from './prog-lang.module.scss';

function ProgLang() {
  useEffect(() => {
    try {
      TagCanvas.textColour = getComputedStyle(document.body).getPropertyValue(
        '--secondary-c'
      );
      TagCanvas.activeCursor = 'default';
      TagCanvas.depth = 1;
      TagCanvas.maxSpeed = 0.07;
      TagCanvas.noSelect = true;
      TagCanvas.outlineIncrease = 1;
      TagCanvas.textFont = 'Encode Sans SC, sans-serif';
      TagCanvas.wheelZoom = false;
      TagCanvas.zoom = 0.9;
      TagCanvas.initial = [-0.07, -0.01];
      TagCanvas.Start('myCanvas');
    } catch (e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }, []);

  return (
    <div className={classes.prog__lang}>
      <Head>
        <script defer src="/js/tagcanvas.min.js"></script>
      </Head>
      <div id="myCanvasContainer">
        <canvas id="myCanvas" width="500" height="500">
          <ul>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/Node.js"
                target="_blank"
              >
                Node.JS
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
                target="_blank"
              >
                React
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/HTML" target="_blank">
                HTML
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/CSS" target="_blank">
                CSS
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/JavaScript"
                target="_blank"
              >
                JavaScript
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/Express.js"
                target="_blank"
              >
                Express
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/MongoDB"
                target="_blank"
              >
                MongoDB
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
                target="_blank"
              >
                SASS
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/TypeScript"
                target="_blank"
              >
                TypeScript
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/Mongoose_(web_server)"
                target="_blank"
              >
                Mongoose
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/GitHub" target="_blank">
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/Representational_state_transfer"
                target="_blank"
              >
                REST API
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/Npm_(software)"
                target="_blank"
              >
                npm
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/JSON" target="_blank">
                JSON
              </Link>
            </li>
            <li>
              <Link href="https://en.wikipedia.org/wiki/Lodash" target="_blank">
                _lodash
              </Link>
            </li>
            <li>
              <Link
                href="https://en.wikipedia.org/wiki/CSS_animations"
                target="_blank"
              >
                Animation
              </Link>
            </li>
          </ul>
        </canvas>
      </div>
    </div>
  );
}

export default ProgLang;
