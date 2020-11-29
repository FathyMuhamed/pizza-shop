import Layout from "components/Layout"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import client from "../../client"
import Sweets from "components/sweets"
import { querySweetAll } from "querys/sweetQuery"

export default function SweetPage({
  sweets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Sweet">
      <Sweets sweets={sweets} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sweets = await client.fetch(querySweetAll)
  return {
    props: { sweets },
  }
}
