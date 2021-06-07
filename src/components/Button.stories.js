import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'Back',
  isActive: false,
}

export const ActiveButton = Template.bind({})
ActiveButton.args = {
  children: 'Back',
  isActive: true,
}
