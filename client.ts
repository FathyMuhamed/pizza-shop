import sanityClient  from '@sanity/client'

export const groq = String.raw

export default sanityClient({
    projectId:'uopkzsm2',
    dataset:'production',
    useCdn:true,
})