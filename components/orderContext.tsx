import React, { useState } from "react"

const OrderContext = React.createContext<any>([])

export function OrderProvider({ children }: any) {
  const [order, setOrder] = useState([])
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext
