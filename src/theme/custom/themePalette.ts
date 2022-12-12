import { DefaultTheme } from 'styled-components';

export const themePalette: DefaultTheme['palette'] = {
    accent: '#130ea6',
    secondary: '#ff671f',
    common: {
        black: '#000000',
        white: '#FFFFFF',
        grey: '#4D4D4D',
    },
    red: '#C80008',
    gradients: {
        blueHeader:
            'linear-gradient(90deg, rgba(19,14,166,1) 44%, rgba(57,100,237,1) 100%)',
        blueSection:
            'linear-gradient(90deg, rgba(19,14,166,1) 0%, rgba(57,100,237,1) 100%)',
        blueTitle:
            'linear-gradient(90deg, rgba(19,14,166,1) 0%, rgba(57,100,237,1) 100%)',
    },
    grey: {
        bg1: '#f0f0f0',
        bg2: '#EFFBEF',
        bg3: '#f2f2f2',
        inactive: '#7D887C',
    },
};
