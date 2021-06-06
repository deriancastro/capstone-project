import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('contains a text', () => {
    render(<Button onClick={jest.fn()}>Back</Button>)

    const button = screen.getByRole('button', { name: 'Back' })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick correctly', () => {
    const handleOnClick = jest.fn()
    render(<Button onClick={handleOnClick}>Back</Button>)

    const button = screen.getByRole('button', { name: 'Back' })
    userEvent.click(button)
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })

  it('changes with the prop isActive', () => {
    const { rerender } = render(<Button onClick={jest.fn()}>Back</Button>)
    const button = screen.getByRole('button')
    const defaultStyle = getComputedStyle(button)

    rerender(
      <Button isActive onClick={jest.fn()}>
        Back
      </Button>
    )
    const activeStyle = getComputedStyle(button)
    expect(activeStyle).not.toBe(defaultStyle)
  })
})
