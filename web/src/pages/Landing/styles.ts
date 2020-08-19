import styled, { css } from 'styled-components'

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`

export const PageLandingContent = styled.div`
  > img {
    width: 100%;
  }

  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total"
    ;

    > img {
      grid-area: hero;
    }
  }
  
`

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    img {
      height: 100%;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    a {
      font-size: 2.4rem;
    }
  }
`

export const Button: any = styled.div`
  border-radius: 0.8rem;
  
  a {
    width: 21rem;
    height: 9.4rem;
    font: 700 2.0rem Archivo;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    img {
      width: 4rem;
    }
  }
  
  @media (min-width: 1100px){
    a {
      width: 30rem;
      height: 10.4rem;
      font-size: 2.4rem;

      flex-direction: row;
      justify-content: center;
    }
  }

  ${(props: any) => {
    if (props.study) {
      return (css`
        background: var(--color-primary-lighter);

        :hover{
          background: var(--color-primary-light);
        }
      `)
    }
    if (props.give_classes) {
      return (css`
      background: var(--color-secundary);

      :hover{
        background: var(--color-secundary-dark);
      }
    `)
    }

  }}
  :first-child {
    margin-right: 1.6rem;
  }

`

export const Span = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`