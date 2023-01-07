import Head from 'next/head'
import Router from 'next/router'

export default function index() {

  const redirect = (path: string) => {
    Router.replace(path)
  }

  return (
    <div>
      <Head>
        <title>app</title>
        <meta name="description" content="Challenge technique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-screen w-screen flex flex-col space-y-4 justify-center'>
        <h1 className='font-semibold font-mono text-8xl text-teal-500 text-center animate-bounce'>
          Welcome!
        </h1>
        <div className='flex md:flex-row flex-col space-x-3 justify-center'>
          <button onClick={() => redirect('/login')} className='inline-block px-10 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-medium uppercase rounded-lg shadow-md'>
            Login
          </button>
          <button onClick={() => redirect('/home')} className='inline-block px-10 py-3.5 bg-sky-500 hover:bg-sky-400 text-white font-medium uppercase rounded-lg shadow-md'>
            Home
          </button>
        </div>
      </div>
    </div>
  )
}
