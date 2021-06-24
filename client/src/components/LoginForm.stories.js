import LoginForm from './LoginForm'
export default {
  title: 'LoginForm',
  component: LoginForm,
}

const Template = args => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {}
