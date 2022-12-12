import type { AppProps } from 'next/app';

import { RootProvider } from 'providers/RootProvider';

import '../public/static/fonts/stylesheet.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <RootProvider>
            <Component {...pageProps} />
        </RootProvider>
    );
};
export default App;
