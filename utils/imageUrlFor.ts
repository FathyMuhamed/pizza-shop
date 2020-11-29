import  imageUrlBuilder  from '@sanity/image-url';
import client from '../client';


const imageBuilder = imageUrlBuilder(client);
export const imageUrlFor = (source:any) => imageBuilder.image(source)

