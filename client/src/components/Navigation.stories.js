import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  pages: [
    { title: 'Home', path: '/' },
    { title: 'Goals', path: '/goals' },
    { title: 'Tutorial', path: '/tutorial' },
  ],
}
