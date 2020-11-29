import Link from "next/link"
import styled from "styled-components"

const Img = styled.img`
  width: clamp(8vw, 5em, 9vw);
  height: 10vh;
  &:hover {
    cursor: pointer;
  }
`
export default function Logo() {
  return (
    <Link href="/">
      <Img src="/logo.svg" alt="Hot Pizza" />
    </Link>
  )
}
