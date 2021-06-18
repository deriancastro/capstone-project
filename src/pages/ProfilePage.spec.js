import { render, screen } from '@testing-library/react'
import ProfilePage from './ProfilePage'

describe('ProfilePage', () => {
  it('renders a heading and a Profile component', () => {
    const profileInfo = {
      id: '9ddee695-7f00-4c73-9e6e-06ee3af87399',
      fullName: 'Derian Castro',
      aboutYou: 'Hey! watch out because I´m an uchimata machine',
      image:
        'http://res.cloudinary.com/did6rcsck/image/upload/v1624026486/derian_u8hh7b.jpg',
    }

    render(<ProfilePage pageName="PROFILE" profileInfo={profileInfo} />)

    const heading = screen.getByRole('heading', { name: 'PROFILE' })
    expect(heading).toBeInTheDocument()

    const profile = screen.getByTestId('profile')
    expect(profile).toBeInTheDocument()
  })
})
