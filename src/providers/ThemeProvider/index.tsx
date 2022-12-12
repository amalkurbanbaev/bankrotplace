import { ReactNode } from 'react';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { customTheme, GlobalStyles } from 'theme';

interface IThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({
    children,
}: IThemeProviderProps): JSX.Element => {
    return (
        <StyledThemeProvider theme={customTheme}>
            <GlobalStyles />
            {children}
        </StyledThemeProvider>
    );
};
