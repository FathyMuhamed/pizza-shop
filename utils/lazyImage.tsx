import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { imageUrlFor } from "./imageUrlFor"

const LazyImg = styled.div`
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 3px solid var(--primary);
  }
  .source {
    opacity: 0;
    transition: opacity 1200ms;
  }

  .loaded {
    opacity: 1;
  }
`

export default function LazyImage({ src, alt, lqip }: any) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<any>()
  useEffect(() => {
    if (imgRef?.current?.complete) {
      setLoaded(true)
    }
  }, [])

  return (
    <LazyImg>
      <div style={{ paddingBottom: "100%" }} />
      {lqip && <img src={lqip} alt="" aria-hidden="true" />}
      <img
        loading="lazy"
        src={`${imageUrlFor(src)}`}
        alt={alt}
        ref={imgRef}
        onLoad={() => setLoaded(true)}
        className={`source ${loaded && `loaded`}`}
      />
    </LazyImg>
  )
}

// .width(500).height(500).auto("format")
