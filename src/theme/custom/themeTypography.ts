import { css, DefaultTheme } from 'styled-components';

export const themeTypography: DefaultTheme['typography'] = {
    body: {
        large: css`
            font-size: 18px;
            font-weight: 500;
            letter-spacing: 0.5px;
            line-height: 24px;
        `,
        medium: css`
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0.25px;
            line-height: 20px;
        `,
        small: css`
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.4px;
            line-height: 16px;
        `,
        extraSmall: css`
            font-size: 12px;
            font-weight: 400;
            letter-spacing: 0.4px;
            line-height: 14px;
        `,
    },
    title: {
        large: css`
            font-size: 48px;
            line-height: 1.15;
            font-weight: 700;
            text-transform: uppercase;
        `,
        medium: css`
            font-size: 48px;
            line-height: 1.15;
            font-weight: 700;
            text-transform: uppercase;
        `,
        small: css`
            font-size: 24px;
            font-weight: 700;
            line-height: 1.05;
        `,
        extraSmall: css`
            font-size: 13px;
            font-weight: 500;
            line-height: 1.05;
        `,
    },
    fontFamily: 'Montserrat, Helvetica, sans-serif',
};
