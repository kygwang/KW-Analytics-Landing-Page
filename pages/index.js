import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
          Under maintenance - coming soon!
          You can learn more about <a href="https://www.linkedin.com/in/kylegwang">Kyle Wang</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
