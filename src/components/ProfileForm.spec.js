import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfileForm from './ProfileForm'

describe('ProfileForm', () => {
  const noop = () => {}
  const image =
    'http://res.cloudinary.com/did6rcsck/image/upload/v1624026486/derian_u8hh7b.jpg'

  it('renders 2 inputs feld, 1 photo and 1 button', () => {
    render(
      <ProfileForm onSubmit={noop} upload={noop} signIn={noop} image={image} />
    )

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)
  })
})
