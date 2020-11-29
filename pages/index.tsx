import React from "react"
import Layout from "components/Layout"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home } from "styles/homeStyle"

export default function home() {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  }

  return (
    <Layout title="home">
      <Home>
        <div>
          <motion.h2
            transition={config}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
          >
            Order your Favourite pizza
          </motion.h2>
          <p>
            we promise you'll enjoy every sweet moment to find you favourite.eat
            what you love and save you time.
          </p>
          <Link href="/menu">
            <button>Order Now →</button>
          </Link>
        </div>
        <img src="/pizza.gif" alt="home image" />
      </Home>
    </Layout>
  )
}
