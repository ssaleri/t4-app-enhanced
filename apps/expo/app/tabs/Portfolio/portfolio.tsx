import Head from 'next/head'
import { PortfolioScreen } from 'app/features/portfolio/screen';
import { Stack } from "expo-router";
import { HomeScreen } from "app/features/home/screen";

export default function Page() {
  return (
    <>
      <Stack.Screen />
      <PortfolioScreen/>
    </>
  )
}
