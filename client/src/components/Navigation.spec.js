import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders 3 Navigation´s buttons', () => {
    render(
      <MemoryRouter>
        <Navigation
          pages={[
            { title: 'profile', path: '/' },
            { title: 'tutorial', path: '/tutorial' },
            { title: 'goals', path: '/goals' },
          ]}
        />
      </MemoryRouter>
    )

    const navButtonList = screen.getAllByRole('link')
    expect(navButtonList).toHaveLength(3)
    expect(navButtonList[0]).toHaveTextContent('profile')
    expect(navButtonList[1]).toHaveTextContent('tutorial')
    expect(navButtonList[2]).toHaveTextContent('goals')
  })
})
