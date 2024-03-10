import { BlogScreen } from 'app/features/blog/screen'
import Head from 'next/head'
import { trpc } from 'app/utils/trpc'
import { match } from "ts-pattern";
import { empty, error, loading } from "app/utils/trpc/patterns";
import { GenericError } from "@t4/ui/src/components/molecules/GenericError/GenericError";
import { ActivityIndicator } from "react-native";
import { Paragraph } from "@t4/ui/src";
import React from "react";

export default function Page() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>

      <BlogScreen />
    </>
  )
}
