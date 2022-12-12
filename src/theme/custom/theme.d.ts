import { FlattenSimpleInterpolation } from 'styled-components';

// * theme palette declaration * //
export interface IThemePalette {
    accent: string;
    secondary: string;
    common: {
        black: string;
        white: string;
        grey: string;
    };
    red: string;
    gradients: {
        blueHeader: string;
        blueSection: string;
        blueTitle: string;
    };
    grey: {
        bg1: string;
        bg2: string;
        bg3: string;
        inactive: string;
    };
}

// * theme effects declaration * //
// interface IThemeEffects {
//     blur: FlattenSimpleInterpolation;
// }

// * theme font variants declaration * //
export type ThemeFontVariantSizeKeys =
    | 'large'
    | 'medium'
    | 'small'
    | 'extraSmall';

export type ThemeFontVariantGroupKeys = 'body' | 'title';

type ThemeFontVariants = {
    [G in ThemeFontVariantGroupKeys]: {
        [K in ThemeFontVariantSizeKeys]: FlattenSimpleInterpolation;
    };
};

// * theme border radius declaration * //

interface IThemeBorderRadius {
    buttons: string;
    extraLarge: string;
    large: string;
    medium: string;
}
interface IThemeSpacers {
    medium: string;
    small: string;
    extraSmall: string;
}

// * custom theme declaration * //
export interface ICustomTheme {
    palette: IThemePalette;
    // effects: IThemeEffects;
    typography: ThemeFontVariants & {
        fontFamily: string;
    };
    borderRadius: IThemeBorderRadius;
    spacers: IThemeSpacers;
}
