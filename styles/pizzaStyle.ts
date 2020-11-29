import styled from "styled-components";

export const Pizza = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.6em;
  justify-content: center;
  align-items: center;
  margin: 3em 0;
  li {
    h2 {
      font-size: 2em;
      font-size: 2.8vmax;
      display: flex;
      place-items: center;
      text-align: center;
      span {
        background-color: var(--hover);
        color: var(--text-secondary);
        padding: 0px 4px;
        font-size: 12px;
        border-radius: 4px;
        text-align: center;
        margin-left: 3px;
        letter-spacing: 1.2px;
      }
    }
    h3 {
      color: var(--text-secondary);
      margin: 0.5em;
      font-size: 2vmax;
    }
    .size {
      margin-top: 1.2em;
      display: flex;
      place-content: center;
      flex-wrap: wrap;
      gap: 1em;

      button {
        flex: 0 1 20vmin;
        cursor: pointer;
        background-color: var(--hover);
        border: none;
        padding: 10px 17px;
        border-radius: 5px;
        font-size: 0.8em;
        transition: all 0.3s ease-in;
        &:hover,
        &:focus {
          background-color: var(--primary);
        }
        span {
          color: var(--text-secondary);
        }
      }
    }
  }
`