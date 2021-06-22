import LogoutButton from './LogoutButton'
export default {
  title: 'LogoutButton',
  component: LogoutButton,
}

const Template = args => <LogoutButton {...args} />

export const DefaultLogoutButton = Template.bind({})
DefaultLogoutButton.args = {}
