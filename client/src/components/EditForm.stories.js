import EditForm from './EditForm'
export default {
  title: 'EditForm',
  component: EditForm,
}

const Template = args => <EditForm {...args} />

export const Default = Template.bind({})
Default.args = {
  profileInfo: {
    fullName: 'Derian Castro',
    aboutYou: 'I am a coder',
    image:
      'http://res.cloudinary.com/did6rcsck/image/upload/v1624372461/IMG_0203_trlmaw.png',
  },
}
