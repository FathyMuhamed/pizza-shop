import OrderContext from "components/orderContext"
import { useContext } from "react"

export default function useOrder() {
  const [order, setOrder] = useContext(OrderContext)

  function addToOrder(orderedPizza: any) {
    setOrder([...order, orderedPizza])
  }
  function removeFromOrder(index: any) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)])
  }
  return { order, addToOrder, removeFromOrder }
}
