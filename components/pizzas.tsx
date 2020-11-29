import React from "react"
import Link from "next/link"
import LazyImage from "utils/lazyImage"
import { Click, MenuHeader, MenuLists } from "styles/menuStyle"
import Add from "./icons/add"

export default function Pizzas({ pizzas, show }: any) {
  return (
    <>
      <MenuHeader>
        {show ? (
          <>
            <h2>Pizzas</h2>
            <Link href="/menu/pizza">
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
        {pizzas.map(({ _id, name, slug, url, price }: Pizza) => (
          <Link key={_id} href="/menu/pizza/[slug]" as={`/menu/pizza/${slug}`}>
            <li>
              <LazyImage {...url} />
              <Click tabIndex={0} title="Click here to add ">
                <Add />
              </Click>
              <p>$ {price}</p>
              <h3>{name}</h3>
            </li>
          </Link>
        ))}
      </MenuLists>
    </>
  )
}
