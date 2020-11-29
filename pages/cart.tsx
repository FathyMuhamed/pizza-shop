import client from "client"
import Layout from "components/Layout"
import { GetStaticProps } from "next"
import { queryPizzaAll } from "querys/pizzaQuery"
import { querySweetAll } from "querys/sweetQuery"
import React from "react"
import calculateOrderTotal from "utils/calculateOrderTotal"
import useOrder from "utils/useOrder"
import OrderAll from "components/Order"
// import useForm from "utils/useForm"

export default function Order({ pizzas, sweets }: any) {
  const { order, removeFromOrder } = useOrder()
  // const { orderSweet, removeFromOrderSweet } = useSweet()
  // const { values, updateValue } = useForm({
  //   name: "",
  //   email: "",
  // })
  return (
    <Layout title="order">
      {order.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>No items 😞</h2>
      ) : (
        <form style={{ margin: "2em 0" }}>
          {/* <fieldset>
          <legend>name</legend>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
        </fieldset> */}
          <fieldset style={{ textAlign: "center" }}>
            Total is : $ {calculateOrderTotal(order)}
          </fieldset>
          <fieldset>
            <legend>Cart Contents ({[...order].length}) </legend>
            <OrderAll
              order={order}
              removeFromOrder={removeFromOrder}
              pizzas={pizzas}
              sweets={sweets}
            />
          </fieldset>
        </form>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pizzas = await client.fetch(queryPizzaAll)
  const sweets = await client.fetch(querySweetAll)
  return {
    props: { pizzas, sweets },
  }
}
