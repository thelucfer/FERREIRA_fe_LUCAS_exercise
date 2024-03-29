import { css } from 'styled-components';

export const reset = css`
  /* Set core root defaults */
  @media (prefers-reduced-motion: no-preference) {
    html:focus-within {
      scroll-behavior: smooth;
    }
  }

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    /* Remove default margin on everything */
    margin: 0;
    /* Remove default padding on everything */
    padding: 0;
    /* Calc 'em' based line height, bigger line height for smaller font size and smaller line height for bigger font size: https://kittygiraudel.com/2020/05/18/using-calc-to-figure-out-optimal-line-height/ */
    line-height: calc(0.25rem + 1em + 0.25rem);
  }

  /* Remove border and set sensible defaults for backgrounds, on all elements except fieldset progress and meter */
  *:where(:not(fieldset, progress, meter)) {
    border-width: 0;
    border-style: solid;
    background-origin: border-box;
    background-repeat: no-repeat;
  }

  html {
    /* Allow percentage-based heights in the application */
    block-size: 100%;
    /* Making sure text size is only controlled by font-size */
    -webkit-text-size-adjust: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    @supports (height: 100dvh) {
      min-height: 100dvh;
    }

    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;

    /* Allow percentage-based heights in the application */
    min-block-size: 100%;
  }

  /* A elements that don't have a class get default styles */
  :where(a) {
    &:is([class]) {
      color: inherit;
      text-decoration: inherit;
    }

    &:not([class]) {
      text-decoration-skip-ink: auto;
    }
  }

  /* Remove stroke and set fill colour to the inherited font colour */
  :where(svg) {
    stroke: none;
    fill: currentColor;
  }

  /* SVG's without a fill attribute */
  :where(svg):where(:not([fill])) {
    /* Remove fill and set stroke colour to the inherited font colour */
    stroke: currentColor;
    fill: none;
    /* Rounded stroke */
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Improve media defaults */
  :where(img, svg, video, canvas, audio, iframe, embed, object) {
    display: block;
  }
  :where(img, svg, video) {
    block-size: auto;
    max-inline-size: 100%;
  }

  /* Position list marker inside */
  :where(ul, ol) {
    list-style-position: inside;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  :where(ul, ol)[role='list'] {
    list-style: none;
  }

  /* Remove search field's clear button */
  :where(input)[type='search']::-webkit-search-decoration,
  :where(input)[type='search']::-webkit-search-cancel-button,
  :where(input)[type='search']::-webkit-search-results-button,
  :where(input)[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  /* Make it clear that interactive elements are interactive */
  :where(a[href], area, button, label[for], select, summary, [tabindex]:not([tabindex*='-'])) {
    cursor: pointer;
    touch-action: manipulation;
  }
  :where(input[type='file']) {
    cursor: auto;
  }
  :where(input[type='file'])::-webkit-file-upload-button,
  :where(input[type='file'])::file-selector-button {
    cursor: pointer;
  }

  /* Animate focus outline */
  @media (prefers-reduced-motion: no-preference) {
    :where(:not(input)) {
      &:focus-visible {
        transition: outline-offset 145ms cubic-bezier(0.25, 0, 0.4, 1);
      }

      &:where(:not(:active)):focus-visible {
        transition-duration: 0.25s;
        outline-offset: 5px;
      }
    }
  }

  /* Make sure users can't select button text */
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']),
  :where(input[type='file'])::-webkit-file-upload-button,
  :where(input[type='file'])::file-selector-button {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
    text-align: center;
  }

  /* Disabled cursor for disabled buttons */
  :where(
      button,
      button[type],
      input[type='button'],
      input[type='submit'],
      input[type='reset']
    )[disabled] {
    cursor: not-allowed;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /*
    mostly based on the awesome css resets by:
  
    Elly Loel
    https://elly.to/CSS-Reset
    Andy Bell
    https://andy-bell.co.uk/a-modern-css-reset
  
    some small tweaks of my own
  */
`;
