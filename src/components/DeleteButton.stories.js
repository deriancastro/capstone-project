import DeleteButton from './DeleteButton'

export default {
  title: 'DeleteButton',
  component: DeleteButton,
}

const Template = args => <DeleteButton {...args} />

export const DefaultDeleteButton = Template.bind({})
DefaultDeleteButton.args = {}
