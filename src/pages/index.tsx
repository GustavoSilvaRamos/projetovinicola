import { Hero } from '../components/Hero'
import { Desc } from '../components/Desc'
import { Invite } from '../components/Invite'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Projeto Vinícola</title>
      </Head>
      <div>
        <div className="min-h-screen">
          <Hero />
          <Desc />
          <Invite />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
