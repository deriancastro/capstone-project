import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders 3 Navigation´s buttons', () => {
    render(
      <MemoryRouter>
        <Navigation
          pages={[
            { title: 'Home', path: '/' },
            { title: 'Goals', path: '/goals' },
            { title: 'Tutorial', path: '/tutorial' },
          ]}
        />
      </MemoryRouter>
    )

    const navButtonList = screen.getAllByRole('link')
    expect(navButtonList).toHaveLength(3)
  })
})
