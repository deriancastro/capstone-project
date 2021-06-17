import { render, screen } from '@testing-library/react'
import ProfileForm from './ProfilForm'

describe('ProfileForm', () => {
  it('renders', () => {
    render(<ProfileForm />)
    expect(screen.getByText('ProfileForm')).toBeInTheDocument()
  })
})
