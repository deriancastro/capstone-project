import profileData from '../data/profileData.json'
import Profile from './Profile'

export default {
  title: 'Profile',
  component: Profile,
}

const Template = args => <Profile {...args} />
const { image, name, text } = profileData[0]

export const Default = Template.bind({})
Default.args = {
  image: image,
  name: name,
  text: text,
}
