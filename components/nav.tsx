import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Logo from "./icons/logo"
import Cart from "./icons/cart"
const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--background);
  z-index: 2;
  margin-bottom: 1em;
`
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  --nav-container: 85vw;
  width: var(--nav-container);
  margin: auto;
  cursor: pointer;
`
const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;

  a:last-of-type {
    margin-right: 1.3em;
  }
`
export default function Nav() {
  return (
    <Container>
      <NavBar>
        <Logo />
        <Links>
          <Link href="/">Home</Link>
          <Link href="/menu">Menus</Link>
          <Link href="/contacts">Contacts</Link>
          <Cart orderNav />
        </Links>
      </NavBar>
    </Container>
  )
}
