import Link from 'next/link'
import Head from 'next/head'

export default function Ski() {
  return (
    <>
      <Head>
        <title>Ski Instructor</title>
      </Head>
      <h1>Ski Instructor</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}