import { groq } from "client";

export const querySweetAll = groq`*[_type == 'sweet']{
    _id,
    "slug": slug.current,
    price,
    'url':{
      'src': image.asset->url,
      "alt": name,
      'lqip': image.asset->metadata.lqip,
     },
  }`
export const querySweet = groq`*[_type == 'sweet']{
    _id,
    "slug": slug.current,
    price,
    'url':{
      'src': image.asset->url,
      "alt": name,
      'lqip': image.asset->metadata.lqip,
     },
  }[0..2]`