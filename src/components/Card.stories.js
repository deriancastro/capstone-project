import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  techName: 'Uchimata',
  url: 'https://youtu.be/hNV9Oh2B_Kc',
}
