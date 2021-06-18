import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailPage from './DetailPage'

describe('DetailPage', () => {
  const noop = () => {}
  const currentTechnique = {
    techName: 'uchimata',
    url: 'https://youtu.be/hNV9Oh2B_Kc',
  }

  it('renders: 1 header, 1 video and 1 button', () => {
    render(<DetailPage currentTechnique={currentTechnique} onNavigate={noop} />)

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()

    const video = screen.getByTestId('video')
    expect(video).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onNavigate correctly', () => {
    const onNavigate = jest.fn()
    render(<DetailPage pageName="Uchimata" onNavigate={onNavigate} />)

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
