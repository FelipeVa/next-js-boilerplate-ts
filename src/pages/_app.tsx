import React from 'react';
import '@/styles/globals.css';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {AppProps} from 'next/dist/next-server/lib/router/router';
import {persistor, store, wrapper} from '@/store/store';

/**
 * Main Component
 * @param Component
 * @param pageProps
 * @returns {JSX.Element}
 * @constructor
 */
function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component
          propWithLongerName={{}}
          anotherPropWithAFuckingLargeNameAsMyDickWillBeHere={{}}
          anotherPropWithAFuckingLargeNameAsMyDickWillBeHere2={{}}
          {...pageProps}
        />
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
