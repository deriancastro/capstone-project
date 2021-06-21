import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Back',
}

export const ActiveButton = Template.bind({})
ActiveButton.args = {
  children: 'Back',
  isActive: true,
}
