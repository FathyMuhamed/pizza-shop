import React from "react"
import LazyImage from "utils/lazyImage"
import { Click, MenuHeader, MenuLists } from "styles/menuStyle"
import Link from "next/link"
import Add from "./icons/add"
import useOrder from "utils/useOrder"
interface Isweets {
  sweets: Sweet[]
  show: Boolean
}
export default function Sweets({ sweets, show }: Isweets) {
  const { addToOrder } = useOrder()
  return (
    <>
      <MenuHeader>
        {show ? (
          <>
            <h2>Sweets</h2>
            <Link href="/menu/sweet">
              <p className="highlight">SeeAll →</p>
            </Link>
          </>
        ) : (
          <Link href="/menu">
            <p className="highlight">← Back to menu</p>
          </Link>
        )}
      </MenuHeader>
      <MenuLists>
        {sweets.map(({ _id, url, price }: Sweet) => (
          <li key={_id}>
            <LazyImage {...url} />
            <Click
              style={{ bottom: "4.5em" }}
              onClick={() => addToOrder({ id: _id, priceSize: price })}
            >
              <Add />
            </Click>
            <p>$ {price}</p>
          </li>
        ))}
      </MenuLists>
    </>
  )
}
