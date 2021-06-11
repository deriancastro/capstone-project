import { render, screen } from '@testing-library/react'
import profileData from '../data/profileData.json'
import ProfilePage from './ProfilePage'

describe('ProfilePage', () => {
  it('renders a heading and a Profile component', () => {
    const profileInfo = profileData
    render(<ProfilePage pageName="PROFILE" profileInfo={profileInfo} />)

    const heading = screen.getByRole('heading', { name: 'PROFILE' })
    expect(heading).toBeInTheDocument()

    const profile = screen.getByTestId('profile')
    expect(profile).toBeInTheDocument()
  })
})
