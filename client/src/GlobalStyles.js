import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --color-primary:#193C40;
  --color-primary-background:#F2EDE9;
  --color-primary-text:#F2EDE9;
  --color-secondary:#04D9B2;
  --color-secondary-background:#333;
  --color-active:#193C40;
  --color-active-background:#F29F05;
  --color-active-text:#F28705;
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
