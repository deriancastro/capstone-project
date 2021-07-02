import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --color-primary:#193C40; //dunke grün
  --color-primary-background:#F2EDE9; //weiß
  --color-primary-text:#F2EDE9;//weiß
  --color-secondary:#D2D6D6; // helles grau
  --color-secondary-card:rgba(210, 214, 214, 0.9);
  --color-secondary-background:#333; //dunkel grau
  --color-active:#193C40; //dunke grün
  --color-active-background:#F29F05; //orange
  --color-active-text:#F28705; //orange
  --color-valid:#9EDABA;
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
