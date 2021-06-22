import Goal from './Goal'
export default {
  title: 'Goal',
  component: Goal,
}

const Template = args => <Goal {...args} />

export const Default = Template.bind({})
Default.args = {
  goalText: 'Improve the performance of my left uchimata',
  goalNumber: 1,
}
