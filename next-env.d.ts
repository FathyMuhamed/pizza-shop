/// <reference types="next" />
/// <reference types="next/types/global" />


type Pizza = {
    _id: string
    slug: string
    name: string
    url: string
    price: number
}

interface ISlug {
  slug: {
    current: string
  }
}
interface Ipizza {
  _id: string
  name: string
  price: number
  spicy: boolean
  url:{
   src:string
   alt:string
   lqip:string
   aspectRatio:string
  }
}

type Sweet = {
    _id: string
    url: string
    price: number
}