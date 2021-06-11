import { render, screen } from '@testing-library/react'
import profileData from '../data/profileData.json'
import Profile from './Profile'

describe('Profile', () => {
  it('renders user´s photo, name and text', () => {
    const profileInfo = profileData
    render(
      <Profile
        image={profileInfo[0].image}
        name={profileInfo[0].name}
        text={profileInfo[0].text}
      />
    )

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    const name = screen.getByText('Derian Castro')
    expect(name).toBeInTheDocument()

    const text = screen.getByRole('textbox')
    expect(text).toHaveTextContent(
      'hey! watch out because I´m an uchimata machine'
    )
  })
})
