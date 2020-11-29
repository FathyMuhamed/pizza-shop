import React from "react"
import { OrderProvider } from "components/orderContext"
import { AppProps } from "next/app"
import "styles/globals.css"
import { AnimatePresence, motion } from "framer-motion"

function MyApp({ Component, pageProps, router }: AppProps) {
  const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100,
    when: "afterChildren",
  }
  return (
    <OrderProvider>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          transition={spring}
          key={router.pathname}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </OrderProvider>
  )
}

export default MyApp
