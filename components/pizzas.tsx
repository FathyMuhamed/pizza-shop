import React from "react"
import Link from "next/link"
import LazyImage from "utils/lazyImage"
import { Click, MenuHeader, MenuLists } from "styles/menuStyle"
import Add from "./icons/add"
interface IPizzas {
  pizzas: Pizza[]
  show: Boolean
}
export default function Pizzas({ pizzas, show }: IPizzas) {
  console.log(pizzas)
  return (
    <>
      <MenuHeader>
        {show ? (
          <>
            <h2>Pizzas</h2>
            <Link href="/menu/pizza">
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
        {pizzas.map(({ _id, name, slug, url, price }: Pizza) => (
          <Link key={_id} href="/menu/pizza/[slug]" as={`/menu/pizza/${slug}`}>
            <li>
              <LazyImage {...url} />
              <Click>
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
