import GlobalStyle from '../theme/globalStyle'
import { Provider } from 'next-auth/client'

export default function App ({ Component, pageProps }) {
    return (
      <Provider session={pageProps.session}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </Provider>
    )
  }