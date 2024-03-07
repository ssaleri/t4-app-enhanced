import { BlogScreen } from 'app/features/blog/screen'
import Head from 'next/head'
import { trpc } from "app/utils/trpc";

export default function Page() {
  const blogPostList = trpc.blogPosts.all.useQuery()
  console.log(blogPostList);

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <BlogScreen/>
    </>
  )
}
