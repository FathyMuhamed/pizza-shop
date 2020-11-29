import React from "react"
import Layout from "components/Layout"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import client from "../client"
import { queryPizza } from "querys/pizzaQuery"
import { querySweet } from "querys/sweetQuery"
import Pizzas from "components/pizzas"
import Sweets from "components/sweets"

export default function Menus({
  pizzas,
  sweets,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Menu Shop">
      <Pizzas pizzas={pizzas} show />
      <Sweets sweets={sweets} show />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pizzas: Pizza = await client.fetch(queryPizza)
  const sweets: Sweet = await client.fetch(querySweet)
  return {
    props: { pizzas, sweets },
  }
}
