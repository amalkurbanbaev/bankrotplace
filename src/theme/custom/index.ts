import { DefaultTheme } from 'styled-components';

import { themeBorderRadius } from './themeBorderRadius';
import { themeSpace } from './themeLayout';
import { themePalette } from './themePalette';
import { themeTypography } from './themeTypography';

export const customTheme: DefaultTheme = {
    borderRadius: themeBorderRadius,
    palette: themePalette,
    typography: themeTypography,
    spacers: themeSpace,
};
