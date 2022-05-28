import "../styles/globals.css"

import {Fragment, ReactElement} from "react"

function MyApp({Component, pageProps}: AppPropsWithLayout): JSX.Element {
  const getLayout =
    Component.getLayout ?? ((page: ReactElement): ReactElement => page)
  return <Fragment>{getLayout(<Component {...pageProps} />)}</Fragment>
}

export default MyApp