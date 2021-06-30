import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --color-primary:#193C40; //verde oscuro
  --color-primary-background:#F2EDE9; //blanco
  --color-primary-text:#F2EDE9;//blanco
  --color-secondary:#D2D6D6; // #19C2FF-azul 
  --color-secondary-background:#333; //gris
  --color-active:#193C40; //verde oscuro
  --color-active-background:#F29F05; //naranja
  --color-active-text:#F28705; //naranja
  --color-danger:#f75010; 
}

 * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 body {
   font-family: 'Roboto',sans-serif;
   font-size: 112.5%;
   line-height: 1.4;
   letter-spacing: 0.02rem;
   background: var(--color-primary-background);
 }
`
