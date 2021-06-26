import { render, screen } from '@testing-library/react'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
  const noop = () => {}

  it('renders', () => {
    render(<LoginForm onLogin={noop} />)
    expect(
      screen.getByRole('form', { name: 'log in form' })
    ).toBeInTheDocument()
  })
})
