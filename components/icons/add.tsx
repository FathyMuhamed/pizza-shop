import React from "react"
import styled from "styled-components"
const StyledAdd = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    transform: scale(var(--ggs, 1.4));
    border-radius: 22px;
  }
  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    top: 8px;
    left: 4px;
  }
  &::after {
    width: 2px;
    height: 10px;
    top: 4px;
    left: 8px;
  }
`
const Add = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => {
    return (
      <>
        <StyledAdd {...props} ref={ref} icon-role="add" />
      </>
    )
  }
)
export default Add
