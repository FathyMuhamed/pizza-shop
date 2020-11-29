import React from "react"
import LazyImage from "utils/lazyImage"
import { Click, MenuHeader, MenuLists } from "styles/menuStyle"
import Link from "next/link"
import Add from "./icons/add"
import useOrder from "utils/useOrder"

export default function Sweets({ sweets, show }: any) {
  const { addToOrder } = useOrder()
  return (
    <>
      <MenuHeader>
        {show ? (
          <>
            <h2>Sweets</h2>
            <Link href="/menu/sweet">
              <button tabIndex={0} className="highlight">
                SeeAll →
              </button>
            </Link>
          </>
        ) : (
          <Link href="/menu">
            <button tabIndex={0} className="highlight">
              ← Back to menu
            </button>
          </Link>
        )}
      </MenuHeader>
      <MenuLists>
        {sweets.map(({ _id, url, price }: Sweet) => (
          <li key={_id}>
            <LazyImage {...url} />
            <Click
              tabIndex={0}
              title="Click here to add "
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
