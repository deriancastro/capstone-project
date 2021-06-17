import ProfileForm from './ProfileForm'
export default {
  title: 'ProfileForm',
  component: ProfileForm,
}

const Template = args => <ProfileForm {...args} />

export const Default = Template.bind({})
Default.args = {}
