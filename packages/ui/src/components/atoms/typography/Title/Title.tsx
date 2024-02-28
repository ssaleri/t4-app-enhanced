import { H1 } from 'tamagui'

type PropsWithStringChildren = {children:string}
export const Title = ({children} : PropsWithStringChildren) => {
  return (
    <>
      <H1>
        {children}
      </H1>
    </>)
};
