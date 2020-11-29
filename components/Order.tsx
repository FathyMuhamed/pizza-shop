import React from "react"
import { MenuLists } from "styles/menuStyle"
import LazyImage from "utils/lazyImage"
interface IsingleOrder {
  id: string
  priceSize: number
}

export default function OrderAll({
  order,
  pizzas,
  removeFromOrder,
  sweets,
}: any) {
  const data = [...pizzas, ...sweets]
  return (
    <MenuLists
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(225px, 1fr))",
      }}
    >
      {order.map((singleOrder: IsingleOrder, index: number) => {
        const orderData = data.find(({ _id }) => _id === singleOrder.id)
        const { name, url } = orderData
        return (
          <li key={`${singleOrder.id} - ${index}`}>
            <LazyImage {...url} />
            <p>$ {singleOrder.priceSize}</p>
            {name && <h3>{name}</h3>}
            <button
              className="buttonOrder removeOrder"
              type="button"
              onClick={() => removeFromOrder(index)}
            >
              remove
            </button>
          </li>
        )
      })}
    </MenuLists>
  )
}
