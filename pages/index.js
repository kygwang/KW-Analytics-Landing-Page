import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to KW Analytics!" />
        <p className="description">
          Under maintenance - coming soon!
        </p>
      </main>

      <Footer />
    </div>
  )
}
