import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailPage from './DetailPage'

describe('DetailPage', () => {
  const noop = () => {}

  it('renders: 1 header, 1 image and 1 button', () => {
    render(<DetailPage pageName="Uchimata" onNavigate={noop} />)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onNavigate correctly', () => {
    const showTutorialPage = jest.fn()
    render(<DetailPage pageName="Uchimata" onNavigate={showTutorialPage} />)

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(showTutorialPage).toHaveBeenCalledTimes(1)
  })
})
