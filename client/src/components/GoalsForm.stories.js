import GoalsForm from './GoalsForm'

export default {
  title: 'GoalsForm',
  component: GoalsForm,
}

const Template = args => <GoalsForm {...args} />

export const Default = Template.bind({})
Default.args = {}
