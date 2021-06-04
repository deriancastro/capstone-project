
  import TutorialPage from './TutorialPage'
  export default {
      title: 'TutorialPage',
      component: TutorialPage
  }
    
  const Template = args => <TutorialPage {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        