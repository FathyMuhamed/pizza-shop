import Head from "next/head"
import styled from "styled-components"
import Nav from "./nav"
const Container = styled.div`
  --w-container: 75vw;
  width: var(--w-container);
  margin: auto;
`

interface layoutProps {
  children: any
  title: string
}

export default function Layout({ children, title = "" }: layoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.ico" />
        <meta name="description" content="Pizza Hot🍕🍕🍕🍕 " />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>pizza Hot | {title} </title>
      </Head>
      <Nav />
      <Container>{children}</Container>
    </>
  )
}
