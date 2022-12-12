import { ReactNode } from 'react';

import { ThemeProvider } from './ThemeProvider';

interface IRootProviderProps {
    children: ReactNode;
}

export const RootProvider = ({ children }: IRootProviderProps): JSX.Element => {
    return <ThemeProvider>{children}</ThemeProvider>;
};
