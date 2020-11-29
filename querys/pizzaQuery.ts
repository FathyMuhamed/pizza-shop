import { groq } from "client";

export const queryPizzaAll = groq`*[_type == 'pizza']{
    _id,
    "slug": slug.current,
    name,
    price,
    'url':{
      'src': image.asset->url,
      "alt": name,
      'lqip': image.asset->metadata.lqip,
     },
  }`

export const queryPizza = groq`*[_type == 'pizza']{
  _id,
 "slug": slug.current,
 name,
 price,
 'url':{
   'src': image.asset->url,
   "alt": name,
   'lqip': image.asset->metadata.lqip,
  },
}[0..2]`