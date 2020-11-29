import { motion } from "framer-motion"
import Link from "next/link"
import styled from "styled-components"
import useOrder from "utils/useOrder"
const CartStyle = styled.div`
  position: relative;
  div {
    position: absolute;
    top: -9px;
    right: -5px;
    background-color: var(--secondary);
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
  }
`
export default function Cart({ orderNav }: any) {
  const { order } = useOrder()
  const numberOfOrder = [...order].length
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  }
  return (
    <Link href="/cart">
      <CartStyle>
        {orderNav && numberOfOrder === 0 ? (
          ""
        ) : (
          <motion.div
            transition={config}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
          >
            {numberOfOrder}
          </motion.div>
        )}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
            fill="currentColor"
          />
          <path
            d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
            fill="currentColor"
          />
          <path
            d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
            fill="currentColor"
          />
        </svg>
      </CartStyle>
    </Link>
  )
}
