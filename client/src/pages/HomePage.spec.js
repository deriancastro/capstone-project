import { render, screen } from '@testing-library/react'
import HomePage from './HomePage'

describe('HomePage', () => {
  //Note: For the moment, this page gives its props to the Profile Form.
  it('renders a Profile Form', () => {
    const noop = () => {}
    const imageUrl =
      'http://res.cloudinary.com/did6rcsck/image/upload/v1624026486/derian_u8hh7b.jpg'

    render(
      <HomePage onSubmit={noop} image={imageUrl} upload={noop} signIn={noop} />
    )

    const profileForm = screen.getByRole('form')
    expect(profileForm).toBeInTheDocument()
  })
})
