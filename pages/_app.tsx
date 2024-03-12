import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'
import React from "react";
import { Provider } from 'react-redux'
import { store } from "@/lib/store";
// const App = ({ Component, pageProps }: AppProps) => {
//   return <Component {...pageProps} />;
// }

// export default appWithTranslation(App)

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default appWithTranslation(App)

