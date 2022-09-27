import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

const redirect = (link) => {
  window.location.href = link;
}


const redirectWith302 = (link) => {
  window.location.href = `/redirect?url=${link}`;
}

export default function Home() {
  const [link, setLink] = useState('');

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Redirector" />
        <input type="text" onChange={(e) => setLink(e.target.value)} value={link}/>
        {link}
        <button onClick={() => redirect(link)}>Redirect</button>
        <button onClick={() => redirect(link)}>Redirect using 302</button>
      </main>

      <Footer />
    </div>
  )
}
