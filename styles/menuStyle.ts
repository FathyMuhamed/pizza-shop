import styled from "styled-components";

export const MenuLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 3em ;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin:1.5em auto;
  padding:1em ;
  /* border-bottom:1px solid var(--primary); */
  li {
    text-align: center;
    position:relative;
    padding: 16px 1em;
    border-radius: 15px;
    box-shadow: var(--shadow-small);
    p{
      margin-top:1em;
    }
  }
`
export const MenuHeader = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  p{
    cursor:pointer;
    &:hover{
      animation: bounce 2s infinite;
    }
  }
`
export const Click = styled.button`
  position:absolute;
  bottom: 7.5em;
  background-color: transparent;
  border: none;
  transform: scale(1.3);
  left: 48%;
  cursor:pointer;
  i{
    animation: pulseAnim 2s infinite;
    background-color:var(--secondary);
    box-shadow: 0 0 0 rgb(249, 109, 112);
      color:var(--primary-2)
    }

`;

