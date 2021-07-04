import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailPage from './DetailPage'

describe('DetailPage', () => {
  const noop = () => {}
  const currentTechnique = {
    currentTechName: 'uchimata',
    currentUrl: 'https://youtu.be/hNV9Oh2B_Kc',
  }

  it('renders: 1 header, 1 video and 1 button', () => {
    render(
      <DetailPage
        currentTechnique={currentTechnique}
        onNavigate={noop}
        toProfile={noop}
      />
    )

    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()

    const video = screen.getByTestId('video')
    expect(video).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'back' })
    expect(button).toBeInTheDocument()
  })

  it('calls onNavigate correctly', () => {
    const onNavigate = jest.fn()

    render(
      <DetailPage
        currentTechnique={currentTechnique}
        onNavigate={onNavigate}
        toProfile={noop}
      />
    )

    const button = screen.getByRole('button', { name: 'back' })
    userEvent.click(button)
    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
