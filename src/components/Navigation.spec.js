import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders 3 Navigation´s buttons', () => {
    render(
      <Navigation
        pages={[
          { name: 'Home', path: '/' },
          { name: 'Goals', path: '/goals' },
          { name: 'Tutorial', path: '/tutorial' },
        ]}
      />
    )

    const navButtonList = screen.getAllByRole('button')
    expect(navButtonList).toHaveLength(3)
  })
})
