import Navigation from './Navigation'
export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => <Navigation {...args} />

export const Default = Template.bind({})
Default.args = {
  pages: [
    { name: 'Home', path: '/' },
    { name: 'Goals', path: '/goals' },
    { name: 'Tutorial', path: '/tutorial' },
  ],
}
