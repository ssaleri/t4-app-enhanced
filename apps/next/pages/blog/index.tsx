import { BlogScreen } from 'app/features/blog/screen'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <BlogScreen/>
    </>
  )
}
