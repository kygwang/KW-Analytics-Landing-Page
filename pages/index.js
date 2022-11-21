import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Welcome - KW Analytics Inc.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to KW Analytics!" />
        <p className="description">
          Kyle Wang's website <br>
          Under maintenance - coming soon!
        </p>
      </main>

      <Footer />
    </div>
  )
}
