import { render, screen } from '@testing-library/react'
import Profile from './Profile'

describe('Profile', () => {
  const onEdit = jest.fn()
  const fullName = 'Derian Castro'
  const aboutYou = 'Hey! watch out because I´m an uchimata machine'
  const image =
    'http://res.cloudinary.com/did6rcsck/image/upload/v1624119325/derian_mzskoz.jpg'

  it('renders user´s photo, name and text', () => {
    render(
      <Profile
        image={image}
        fullName={fullName}
        aboutYou={aboutYou}
        onEdit={onEdit}
      />
    )

    const Userimage = screen.getByRole('img')
    expect(Userimage).toBeInTheDocument()

    const userFullName = screen.getByTestId('name')
    expect(userFullName).toHaveTextContent('Derian Castro')

    const UserAboutYou = screen.getByTestId('aboutYou')
    expect(UserAboutYou).toHaveTextContent(
      'Hey! watch out because I´m an uchimata machine'
    )
  })
})
