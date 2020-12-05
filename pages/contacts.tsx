import Layout from "components/Layout"
import styled from "styled-components"
const Contact = styled.div`
  margin: auto;
  text-align: center;
  img {
    width: clamp(55%, 45vw, 55%);
    margin: auto;
  }
`
export default function ContactPage() {
  return (
    <Layout title="home">
      <Contact>
        <img src="/contact.png" alt="contact image" />
        <h2>Coming Soon!!</h2>
      </Contact>
    </Layout>
  )
}
