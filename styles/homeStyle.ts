import styled from "styled-components";

export const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  place-items: center;
  height: 70vh;
  gap: 2em;
  h2 {
    font-size: 4vmax;
    font-weight: bold;
    color: var(--primary);
    margin: 0.6em auto;
  }
  p {
    color: var(--text-secondary);
    width: 90%;
  }
  img {
    width: 100%;
    margin: auto;
    text-align: center;
    transform:scale(1.1);
  }
  button {
    background-color: var(--background-2);
    padding: 1em 1.2em;
    margin: 1em;
    font-size: 15px;
    border-radius: 10px;
    &:hover {
      animation: bounce-left 0.8s both;
    }
  }
`