import { H1, H3 } from 'tamagui'
import React from "react";

type PropsWithStringChildren = { children: string }
export const Title = ({ children }: PropsWithStringChildren) => {
  const title = children;
  const isLongTitle = title?.length > 15;

  return (
    <>
      {isLongTitle ? <H3 color={'white'}>{title}</H3> : <H1 color={'white'}>{title}</H1>}
    </>
  )
}
