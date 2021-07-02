import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddButton from './AddButton'

describe('AddButton', () => {
  const noop = () => {}

  it('renders a button with a svg element inside it', () => {
    render(<AddButton onClick={noop} />)

    const addButton = screen.getByRole('button', { name: 'add.svg' })
    expect(addButton).toBeInTheDocument()
  })

  it('calls onClick correctly', () => {
    const onClick = jest.fn()
    render(<AddButton onClick={onClick} />)

    const addButton = screen.getByRole('button', { name: 'add.svg' })
    userEvent.click(addButton)
    expect(onClick).toBeCalledTimes(1)
  })
})
