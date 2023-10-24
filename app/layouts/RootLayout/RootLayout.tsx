import styles from './RootLayout.module.css'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Container } from '@mui/material'
import { Links, LiveReload, Meta, Scripts, ScrollRestoration, Outlet } from '@remix-run/react'

const RoootLayout = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className={ styles.layout }>
          <Header />
          <main className={ styles.main }>
            <Container>
              <Outlet />
            </Container>
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export { RoootLayout }