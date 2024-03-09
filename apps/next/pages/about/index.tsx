import { AboutScreen } from 'app/features/about/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <AboutScreen />
    </>
  )
}
