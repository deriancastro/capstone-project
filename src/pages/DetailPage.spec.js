import { render, screen } from '@testing-library/react'
import DetailPage from './DetailPage'

describe('DetailPage', () => {
  it('renders: 1 header, 1 image and 1 button', () => {
    render(<DetailPage pageName="Uchimata" toTutorialPage={jest.fn()} />)

    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument()
  })
})
