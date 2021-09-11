import '@/styles/globals.css';
import {Provider} from 'react-redux';
import {persistor, store, wrapper} from '@/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {AppProps} from 'next/dist/next-server/lib/router/router';

/**
 * Main Component
 * @param Component
 * @param pageProps
 * @returns {JSX.Element}
 * @constructor
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
