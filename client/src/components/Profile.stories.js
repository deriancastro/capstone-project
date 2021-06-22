import Profile from './Profile'

export default {
  title: 'Profile',
  component: Profile,
}

const Template = args => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {}
