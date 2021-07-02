import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfilePage from './ProfilePage'

describe('ProfilePage', () => {
  const noop = () => {}
  const logOut = jest.fn()
  const onEdit = jest.fn()

  const profileInfo = {
    fullName: 'Derian Castro',
    aboutYou: 'Hey! watch out because I´m an uchimata machine',
    image:
      'http://res.cloudinary.com/did6rcsck/image/upload/v1624026486/derian_u8hh7b.jpg',
  }

  it('renders a heading and a Profile component', () => {
    render(
      <ProfilePage
        pageName="PROFILE"
        profileInfo={profileInfo}
        logOut={noop}
        onEdit={noop}
      />
    )

    const heading = screen.getByRole('heading', { name: 'PROFILE' })
    expect(heading).toBeInTheDocument()

    const profile = screen.getByTestId('profile')
    expect(profile).toBeInTheDocument()
  })

  it('calls logOut correctly', () => {
    render(
      <ProfilePage
        pageName="PROFILE"
        profileInfo={profileInfo}
        logOut={logOut}
        onEdit={onEdit}
      />
    )

    const logoutButton = screen.getByRole('button', { name: 'logout.svg' })
    userEvent.click(logoutButton)
    expect(logOut).toHaveBeenCalledTimes(1)
  })
})
