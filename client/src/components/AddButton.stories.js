
  import AddButton from './AddButton'
  export default {
      title: 'AddButton',
      component: AddButton
  }
    
  const Template = args => <AddButton {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        