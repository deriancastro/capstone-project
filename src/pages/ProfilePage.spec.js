
  import {render, screen} from '@testing-library/react'
  import ProfilePage from './ProfilePage'
    
  describe('ProfilePage', () => {
      it('renders', () => {
          render(<ProfilePage />)
          expect(screen.getByText('ProfilePage')).toBeInTheDocument()
      })
  })
        