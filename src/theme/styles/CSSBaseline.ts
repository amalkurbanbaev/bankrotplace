import { css } from 'styled-components';

export const CSSBaseline = css`
    * {
        box-sizing: border-box;
        font: inherit;
        margin: 0;
        padding: 0;
        border: 0;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section {
        display: block;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0;
    }

    *[hidden] {
        display: none;
    }
    menu,
    ol,
    ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    p {
        margin-bottom: 0;
    }
`;
