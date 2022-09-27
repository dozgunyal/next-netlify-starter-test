import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

const onClick = (link) => {
  window.location.href = link;
}

export default function Home() {
  const [link, setLink] = useState('');

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
      </Head>

      <main>
        <Header title="Redirector" />
        <input type="text" onChange={(e) => setLink(e.target.value)}/>
        {link}
        <button onClick={() => onClick(link)}>Redirect</button>
      </main>

      <Footer />
    </div>
  )
}

// This function gets called at build time
export async function getServerSideProps({query}) {
  return {
    redirect: {
      destination: query.url,
      statusCode: 302
    },
  }
}

