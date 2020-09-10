import { Hero } from '../components/Hero'
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
        </div>
      </div>
    </>
  )
}
