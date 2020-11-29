import Layout from "components/Layout"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import client from "../../client"
import { queryPizzaAll } from "querys/pizzaQuery"
import Pizzas from "components/pizzas"

export default function PizzaPage({
  pizzas,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Pizza Shop">
      <Pizzas pizzas={pizzas} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pizzas: Pizza = await client.fetch(queryPizzaAll)
  return {
    props: { pizzas },
  }
}
