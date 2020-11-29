import { GetStaticProps, GetStaticPaths } from "next"
import client, { groq } from "../../../client"
import Layout from "components/Layout"
import React, { useState } from "react"
import LazyImage from "utils/lazyImage"
import calculatePizzaPrice from "utils/calculatePizzaPrice"
import useOrder from "utils/useOrder"
import { Pizza } from "styles/pizzaStyle"

export default function Pizzas({ _id, name, price, spicy, url }: Ipizza) {
  const { addToOrder } = useOrder()
  const [priceSize, setPriceSize] = useState<number>(price)

  return (
    <Layout title={name} key={_id}>
      <Pizza key={_id}>
        <LazyImage {...url} />
        <li>
          <h2>
            {name} ${priceSize}
            {spicy ? <span>Spicy🌶</span> : ""}
          </h2>
          <h3>SIZE</h3>
          <div className="size">
            {["SMALL", "MEDIUM", "LARGE"].map((size) => (
              <button
                type="button"
                key={size}
                onClick={() =>
                  setPriceSize(() => calculatePizzaPrice(price, size))
                }
              >
                {size} <span> $ {calculatePizzaPrice(price, size)}</span>
              </button>
            ))}
          </div>
          <button
            className="buttonOrder addOrder"
            onClick={() => addToOrder({ id: _id, priceSize })}
          >
            Add to cart
          </button>
        </li>
      </Pizza>
    </Layout>
  )
}
const pizzasQuery = groq`*[_type == 'pizza' ]{ slug}`
const pizzaSingleQuery = groq`*[_type == 'pizza' && slug.current == $slug ]{
     _id,
     name,
     'url':{
      'src': image.asset->url,
      "alt": name,
      'lqip': image.asset->metadata.lqip,
      'aspectRatio': image.asset->metadata.dimensions.aspectRatio,
     },
     price,
     spicy,
    }`

export const getStaticPaths: GetStaticPaths = async () => {
  const pizzas = await client.fetch(pizzasQuery)
  const paths = pizzas.map(({ slug: { current } }: ISlug) => ({
    params: { slug: current },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: any) => {
  const [pizza]: Tpizza[] = await client.fetch(pizzaSingleQuery, { slug })
  return {
    props: { ...pizza },
  }
}
