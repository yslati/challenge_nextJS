import Head from 'next/head'
import Image from 'next/image'
import bg from '../public/images/sign_in.jpg'

export default function index() {
  return (
    <div className="">
      <Head>
        <title>app</title>
        <meta name="description" content="Challenge technique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
