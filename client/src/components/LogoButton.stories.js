import Logo from './LogoButton'
export default {
  title: 'Logo',
  component: Logo,
}

const Template = args => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {}
