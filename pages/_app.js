import { Provider } from 'next-auth/client'
import "tailwindcss/tailwind.css"
import "../styles/globals.css"

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    )
}