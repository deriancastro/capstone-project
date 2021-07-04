import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EditButton from './EditButton'

describe('EditButton', () => {
  const noop = () => {}

  it('renders a button with a svg element inside it', () => {
    render(<EditButton onClick={noop} />)

    const editButton = screen.getByRole('button', { name: 'edit.svg' })
    expect(editButton).toBeInTheDocument()
  })

  it('calls onClick correctly', () => {
    const onClick = jest.fn()
    render(<EditButton onClick={onClick} />)

    const editButton = screen.getByRole('button', { name: 'edit.svg' })
    userEvent.click(editButton)
    expect(onClick).toBeCalledTimes(1)
  })
})
